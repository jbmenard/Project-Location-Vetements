import React, { useEffect } from 'react';
import Avatar from 'src/components/Avatar';
import CardDesign from 'src/containers/CardDesign';
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
  taMere,
  isLogged,
  // taMere,
}) => {
  console.log('user', taMere);
  const checkUser = (userEmail, productEmail) => {
    if (userEmail === productEmail) {
      return true;
    }

    return false;
  };

  return (
    <>
      <div className="header-background">
        <div className="header-avatar">
          <Avatar size="large" avatar={(taMere.AppUserInfo.avatar !== null) ? taMere.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'} />
          <div className="avatar-add">
            {isLogged
            && checkUser(user.user.email, taMere.email)
            && (
              <>
                <div className="icon-position">
                <i className="fa fa-camera avatar-button" />
                </div>
                <form onSubmit={updateAvatar}>
                  <input type="file" onChange={onChangeAvatarInState} name="avatar" id="avatar" className="avatar-upload" />
                  {toggleValidateButton
                    && <input type="submit" value="envoyer" className="avatar-send" />}
                </form>
              </>
            )}
          </div>
        </div>
        <div className="header-informations">
          <ul className="header-informations-ul">
            <li className="header-informations-fullname" onClick={isLogged && checkUser(user.user.email, taMere.email) ? activeInputFirstName : ''}>

              {!toggleInput
                && taMere.AppUserInfo.first_name ? taMere.AppUserInfo.first_name : 'Mon nom'}
              {isLogged && checkUser(user.user.email, taMere.email) ? <i className="fa fa-edit icon-edit" /> : ''}
              {toggleInput && isLogged
                && (
                  <>
                    <form onSubmit={updateFirstName}>
                      <input className="adduserinfos--input" placeholder={taMere.AppUserInfo.first_name ? taMere.AppUserInfo.first_name : 'Mon nom'} type="text" name="first_name" id="first_name" onChange={onChangeFirstName} />
                      <input type="submit" value="ok" />
                    </form>
                  </>
                )}
            </li>
            <li>
              {taMere.email || 'Email'}
            </li>
            <li onClick={isLogged && checkUser(user.user.email, taMere.email) ? activeInputMobile : ''}>
              {!toggleInput
              && taMere.AppUserInfo.mobile ? taMere.AppUserInfo.mobile : 'Mobile'}
              {isLogged && checkUser(user.user.email, taMere.email) ? <i className="fa fa-edit icon-edit" /> : ''}
              {toggleInput && isLogged
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
        Produits de {taMere.AppUserInfo.first_name ? taMere.AppUserInfo.first_name : taMere.email}
      </h2>
      <div className="card-list">
        {!loading && error && (
          <p className="loading-error">Une erreur s'est produite.Veuillez réessayer plus tard.</p>
        )}
        {
          taMere.products.length
            ? !loading && !error && (
            <article className="product-article">
              {
                    taMere.products.map((list) => (
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
