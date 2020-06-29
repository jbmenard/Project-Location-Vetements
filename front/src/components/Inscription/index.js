import React from 'react';
import './styles.scss';
import Button from 'src/components/Button';
import { Redirect } from 'react-router-dom';
import Account from '../../assets/images/account.png';
import Image from '../../assets/images/img-inscription.jpg';

const Inscription = ({
  onChangeEmail, onChangePassword, onChangeConfirmPassword, createUser, toggleRedirection,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  const handleChangeEmail = (event) => {
    onChangeEmail(event.target.value, event.target.name);
  };

  const handleChangePassword = (event) => {
    onChangePassword(event.target.value, event.target.name);
  };

  const handleChangeConfirmPassword = (event) => {
    onChangeConfirmPassword(event.target.value, event.target.name);
  };

  return (
    <section className="inscription">
      <form className="form" action="" onSubmit={handleSubmit}>

        <h2 className="form-t"> S'inscrire </h2>

        {/* <span className="form-invider"> </span> */}
        <div className="form-infos">
          {/* <label className="form-title">Email</label> */}
          <input className="form-input" type="email" name="email" placeholder="Adresse email" onChange={handleChangeEmail} />
          {/* <label className="form-title">Mot de Passe</label> */}
          <input className="form-input" type="password" name="password" onChange={handleChangePassword} placeholder="Mot de passe" />
          {/* <label className="form-title">Confirmer le Mot de Passe</label> */}
          <input className="form-input" type="password" name="confirmPassword" onChange={handleChangeConfirmPassword} placeholder="Confirmation mot de passe " />
          <div className="form-button">
            <Button type="submit" size="x-large" value="Envoyer" color="form" />

          </div>
        </div>

      </form>
      <div className="wrapper-img">
        <img className="img-design" src={Account} alt="" />
        <img className="img-inscription" src={Image} alt="" />
      </div>
      {toggleRedirection
      && <Redirect to="/" />}
    </section>
  );
};

export default Inscription;
