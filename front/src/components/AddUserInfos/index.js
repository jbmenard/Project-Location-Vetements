import React from 'react';
// import _ from 'lodash';

import './style.scss';

const AddUserInfos = ({
  createUserInformations,
  onChangeFirstName,
  onChangeLastName,
  onChangeAddress,
  onChangeMobile,
  onChangeCertified,
  onChangeRole,
  onChangeAvatar,
  userData,
}) => (
  <div className="adduserinfos">
    <h1 className="adduserinfos--title">Modifier mes infos personnelles</h1>
    <form className="adduserinfos--form" onSubmit={createUserInformations}>
      <label htmlFor="firstname">
        Prénom :
        <input className="adduserinfos--input" type="text" name="first_name" id="first_name" onChange={(event) => onChangeFirstName(event)} />
      </label>
      <label htmlFor="lastname">
        Nom de famille :
        <input className="adduserinfos--input" type="text" name="last_name" id="last_name" onChange={(event) => onChangeLastName(event)} />
      </label>
      <label htmlFor="address">
        Adresse :
        <input className="adduserinfos--input" type="text" name="address" id="address" onChange={(event) => onChangeAddress(event)} />
      </label>
      <label htmlFor="mobile">
        Numéro de téléphone :
        <input className="adduserinfos--input" type="text" name="mobile" id="mobile" onChange={(event) => onChangeMobile(event)} />
      </label>
      <label htmlFor="app_user_id">
        <input className="adduserinfos--input" value={userData.id} type="hidden" name="app_user_id" id="app_user_id" onChange={(event) => onChangeRole(event)} />
      </label>
      <label htmlFor="avatar">
        Avatar :
        <input className="adduserinfos--input" type="file" name="avatar" id="avatar" onChange={(event) => onChangeAvatar(event)} />
      </label>
      <div className="adduserinfos-submit">
        <input className="adduserinfos-submit--input" type="submit" value="Soumettre" />
      </div>
    </form>
  </div>
);

export default AddUserInfos;
