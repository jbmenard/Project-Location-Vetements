import React from 'react';
import './styles.scss';
import Button from 'src/components/Button';

const Inscription = ({
  onChangeEmail, onChangePassword, onChangeConfirmPassword, createUser,
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
    <form className="form" action="" onSubmit={handleSubmit}>
      <h2 className="form-t"> Creer un compte </h2>
      <span className="form-invider"> </span>
      <div className="form-infos">
        <label className="form-title">Email</label>
        <input className="form-input" type="email" name="email" placeholder="exemple@gmail.com" onChange={handleChangeEmail} />
        <label className="form-title">Mot de Passe</label>
        <input className="form-input" type="password" name="password" onChange={handleChangePassword} />
        <label className="form-title">Confirmer le Mot de Passe</label>
        <input className="form-input" type="password" name="confirmPassword" onChange={handleChangeConfirmPassword} />
        <div className="form-button">
          <Button type="submit" size="small" value="Envoyer" color="orange" />

        </div>
      </div>

    </form>
  );
};

export default Inscription;
