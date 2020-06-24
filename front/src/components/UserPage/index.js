import React, { useEffect } from 'react';
import Avatar from 'src/components/Avatar';
import CardDesign from 'src/components/CardDesign';
import Button from 'src/components/Button';

import './style.scss';
import { NavLink } from 'react-router-dom';

const UserPage = ({
  userData, loading, error,
}) => (
  <>
    <div className="header-background">
      <div className="header-avatar">
        <Avatar size="large" avatar={userData.AppUserInfo ? userData.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'} />
        <div className="avatar-add">
          +
        </div>
      </div>
      <div className="header-informations">
        <ul className="header-informations-ul">
          <li className="header-informations-fullname">
            {userData.AppUserInfo ? userData.AppUserInfo.first_name : 'Mon Nom'}
          </li>
          <li>
            {userData.email || 'Email'}
          </li>
          <li>
            {userData.AppUserInfo ? userData.AppUserInfo.mobile : 'Mobile'}
          </li>
        </ul>
        <NavLink to="/newuserinfos">
          <Button type="button" color="orange" size="medium" value="Modifier mon profil" />
        </NavLink>
      </div>
    </div>
    <h2 className="title-user-page">
      Produits de {userData.AppUserInfo ? userData.AppUserInfo.first_name : userData.email}
    </h2>
    <div className="card-list">
      {!loading && error && (
      <p className="loading-error">Une erreur s'est produite.Veuillez réessayer plus tard.</p>
      )}
      {
          !loading && !error && (
            <article className="product-article">
              {
                userData.products.map((list) => (
                  <CardDesign list={list} />
                ))
              }
            </article>
          )
        }
      {loading && (
      <p className="loading">Veuillez patientez. Les articles chargent.</p>
      )}
    </div>
  </>
);

export default UserPage;
