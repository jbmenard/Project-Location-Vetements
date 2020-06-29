import React, { useEffect } from 'react';
import Avatar from 'src/components/Avatar';
import CardDesign from 'src/components/CardDesign';
import Button from 'src/components/Button';

import './style.scss';
import { NavLink } from 'react-router-dom';

const UserPage = ({
  user,
  loading,
  error,
  onChangeFirstName,
  onChangeAvatarInState,
  onChangeMobile,
  updateFirstName,
  updateMobile,
  updateAvatar,
  toggleInput,
  activeInputMobile,
  activeInputFirstName,
  firstName,
  mobile,
  toggleValidateButton,
  // userInfo,
}) =>
// console.log(userInfo);
{

  return (
    <>
      <div className="header-background">
        <div className="header-avatar">
          <Avatar size="large" avatar={user.user.AppUserInfo ? user.user.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'} />
          <div className="avatar-add">
            <div className="avatar-button">
              +
            </div>
            <form onSubmit={updateAvatar}>
              <input type="file" onChange={onChangeAvatarInState} name="avatar" id="avatar" className="avatar-upload" />
              {toggleValidateButton
              && <input type="submit" value="envoyer" className="avatar-send" />}
            </form>
          </div>
        </div>
        <div className="header-informations">
          <ul className="header-informations-ul">
            <li className="header-informations-fullname" onClick={activeInputFirstName}>
              {!toggleInput
                && user.user.AppUserInfo ? user.user.AppUserInfo.first_name : 'Mon Nom' }
              {toggleInput
                && (
                <form onSubmit={updateFirstName}>
                  <input className="adduserinfos--input" placeholder={firstName} type="text" name="first_name" id="first_name" onChange={onChangeFirstName} />
                  <input type="submit" value="ok" />
                </form>
                )}
            </li>
            <li>
              {user.user.email || 'Email'}
            </li>
            <li onClick={activeInputMobile}>
              {!toggleInput
              && user.user.AppUserInfo ? user.user.AppUserInfo.mobile : 'Mobile'}
              {toggleInput
              && (
                <form onSubmit={updateMobile}>
                  <input className="adduserinfos--input" placeholder={mobile} type="text" name="mobile" id="mobile" onChange={onChangeMobile} />
                  <input type="submit" value="ok" />
                </form>
              )}
            </li>
          </ul>
        </div>
      </div>
      <h2 className="title-user-page">
        Produits de {user.user.AppUserInfo ? user.user.AppUserInfo.first_name : user.user.email}
      </h2>
      <div className="card-list">
        {!loading && error && (
          <p className="loading-error">Une erreur s'est produite.Veuillez réessayer plus tard.</p>
        )}
        {
          user.user.products.length
            ? !loading && !error && (
            <article className="product-article">
              {
                    user.user.products.map((list) => (
                      <CardDesign object={list} />
                    )) // ! N'envoit pas la meme structure de données a cardDesign
                  }
            </article>
            )
            : 'Aucun produit'
            }
        {loading && (
          <p className="loading">Veuillez patientez. Les articles chargent.</p>
        )}
      </div>
    </>
  );
};
export default UserPage;
