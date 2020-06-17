import React from 'react';
// import _ from 'lodash';

import './style.scss';

const AddUserInfos = () => (
  <div className="adduserinfos">
    <h1 className="adduserinfos--title">Modifier mes infos personnelles</h1>
    <form className="adduserinfos--form" method="post">
      <label htmlFor="firstname">
        Prénom :
        <input className="adduserinfos--input" type="text" />
      </label>
      <label htmlFor="lastname">
        Nom de famille :
        <input className="adduserinfos--input" type="text" name="lastname" id="lastname" />
      </label>
      <label htmlFor="address">
        Adresse :
        <input className="adduserinfos--input" type="text" />
      </label>
      <label htmlFor="mobile">
        Numéro de téléphone :
        <input className="adduserinfos--input" type="text" />
      </label>
      <label htmlFor="avatar">
        Avatar :
        <div className="adduserinfos-avatar">
          <input className="adduserinfos-avatar--input" type="submit" value="Cliquez ici" />
        </div>
      </label>
      <div className="adduserinfos-submit">
        <input className="adduserinfos-submit--input" type="submit" value="Soumettre" />
      </div>
    </form>
  </div>
);

export default AddUserInfos;
