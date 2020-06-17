import React from 'react';
import './styles.scss';
import Button from 'src/components/Button';

const ConnexionInscription = () => (
  <form className="form" action="">
    <h2 className="form-t"> Creer un compte </h2>
    <span className="form-invider"> </span>
    <div className="form-infos">
      <label className="form-title">Email</label>
      <input className="form-input" type="email" name="nom" placeholder="exemple@gmail.com" />
      <label className="form-title">Mot de Passe</label>
      <input className="form-input" type="password" name="nom" />
      <label className="form-title">Confirmer le Mot de Passe</label>
      <input className="form-input" type="password" name="nom" />
      <div className="form-button">
        <Button size="small" value="Envoyer" color="orange" />
      </div>
    </div>

  </form>
);

export default ConnexionInscription;
