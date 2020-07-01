import React from 'react';
import './styles.scss';
import Button from 'src/components/Button';
import { Redirect } from 'react-router-dom';
import Account from '../../assets/images/account.png';
import Image from '../../assets/images/img-inscription.jpg';

const Inscription = ({
  onChangeEmail, onChangePassword, onChangeConfirmPassword, createUser, toggleRedirection, errorPassword, errorPasswordLength, validePassword, validePasswordLength,
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

        <div className="form-infos">

          <input className="form-input" type="email" name="email" placeholder="Adresse email" onChange={handleChangeEmail} />

          <input className={`${errorPassword || errorPasswordLength ? ' form-input error' : 'form-input'}`} type="password" name="password" onChange={handleChangePassword} placeholder="Mot de passe" />
          {errorPasswordLength && (
            <p className="text-error-form">Le mot de passe doit contenir 6 caractéres </p>
          )}
          <input className={`${errorPassword ? ' form-input error' : 'form-input'}`} type="password" name="confirmPassword" onChange={handleChangeConfirmPassword} placeholder="Confirmation mot de passe " />
          {errorPassword && (
            <p className="text-error-form">Les 2 mots de passe ne correspondent pas </p>
          )}
          <div className="form-button">
            { (errorPassword || errorPasswordLength) && (
              <Button type="button" size="x-large" value="Envoyer" color="error" />
            )}
            { (!errorPassword && !errorPasswordLength) &&(
               <Button type="submit" size="medium" value="Envoyer" color="form" />
            )}

  
          



        

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
