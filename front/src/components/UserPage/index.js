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
  fetchUser,
  fetchProduct,
  // taMere,
}) => {
  useEffect(() => {
    fetchUser();
    fetchProduct();
  }, []);

  console.log('user', taMere);
  const checkUser = (userEmail, productEmail) => {
    if (userEmail === productEmail) {
      return true;
    }

    return false;
  };

  return (
    <>
      <section className="userpage">
        <section className="user-informations">
          <section className="user-profil">
            <h2 className="user-title">
              Profil
            </h2>
            <div className="user-avatar">

              <Avatar size="large" avatar={(taMere.AppUserInfo.avatar !== null) ? taMere.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'} />
              <div className="user-avatar-add">
                {isLogged
                && checkUser(user.user.email, taMere.email)
                && (
                  <>
                    <div className="icon-position">
                      <i className="fa fa-camera user-avatar-button" />
                    </div>
                    <form onSubmit={updateAvatar}>
                      <input type="file" onChange={onChangeAvatarInState} name="avatar" id="avatar" className="user-avatar-upload" />
                      {toggleValidateButton
                        && <input type="submit" value="envoyer" className="user-avatar-send" />}
                    </form>
                  </>
                )}
              </div>
            </div>
            <div className="userinfos-informations">
              <ul className="userinfos-informations-ul">
                <li className="userinfos-informations-fullname" onClick={isLogged && checkUser(user.user.email, taMere.email) ? activeInputFirstName : ''}>

                  {!toggleInput
                    && taMere.AppUserInfo.first_name ? taMere.AppUserInfo.first_name : 'Mon nom'}
                  {isLogged && checkUser(user.user.email, taMere.email) ? <i className="fa fa-edit icon-edit" /> : ''}
                  {toggleInput && isLogged
                    && (
                      <>
                        <form onSubmit={updateFirstName}>
                          <input className="adduserinfos--input" placeholder={taMere.AppUserInfo.first_name ? taMere.AppUserInfo.first_name : 'Mon nom'} type="text" name="first_name" id="first_name" onChange={onChangeFirstName} />
                          <input className="adduserinfos--button" type="submit" value="ok" />
                        </form>
                      </>
                    )}
                </li>
                <li>
                  {taMere.email || 'Email'}
                </li>
                <li className="userinfos-informations-number" onClick={isLogged && checkUser(user.user.email, taMere.email) ? activeInputMobile : ''}>
                  {!toggleInput
                  && taMere.AppUserInfo.mobile ? taMere.AppUserInfo.mobile : 'Mobile'}
                  {isLogged && checkUser(user.user.email, taMere.email) ? <i className="fa fa-edit icon-edit" /> : ''}
                  {toggleInput && isLogged
                  && (
                    <form onSubmit={updateMobile}>
                      <input className="adduserinfos--input" placeholder={mobile} type="text" name="mobile" id="mobile" onChange={onChangeMobile} />
                      <input className="adduserinfos--button" type="submit" value="ok" />
                    </form>
                  )}
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section className="productlist">
          <h2 className="productlist-title">
            Produits de {taMere.AppUserInfo.first_name ? taMere.AppUserInfo.first_name : taMere.email}
          </h2>
          <div className="productlist-cards">
            {!loading && error && (
              <p className="loading-error">Une erreur s'est produite.Veuillez réessayer plus tard.</p>
            )}
            {
              taMere.products.length
                ? !loading && !error && (
                <article className="productlist-article">
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
        </section>
      </section>
    </>
  );
};
export default UserPage;
