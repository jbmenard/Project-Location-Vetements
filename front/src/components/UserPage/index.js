import React, {useEffect} from 'react';
import Avatar from 'src/components/Avatar';
import CardDesign from 'src/components/CardDesign';
import Button from 'src/components/Button';

import './style.scss';
import { NavLink } from 'react-router-dom';

const UserPage = ({ user, userInfo, products, loading, error }) => {
  return (
    <>
      <div className="header-background">
        <div className="header-avatar">
          <Avatar size="large" avatar={userInfo.avatar} />
          <div className="avatar-add">
            +
          </div>
        </div>
        <div className="header-informations">
          <ul className="header-informations-ul">
            <li className="header-informations-fullname">
              {userInfo.first_name ? userInfo : 'Mon Nom'}
            </li>
            <li>
              {user.email ? user.email : 'Email'}
            </li>
            <li>
              {user.mobile ? user.mobile : 'Mobile'}
            </li>
          </ul>
          <NavLink to="/newuserinfos">
            <Button type="button" color="orange" size="medium" value="Modifier mon profil" />
          </NavLink>
        </div>
      </div>
      <h2 className="title-user-page">
        Produits de {userInfo.first_name ? userInfo.first_name : 'Mon nom'}
      </h2>
      <div className="card-list">
        {!loading && error && (
        <p className="loading-error">Une erreur s'est produite.Veuillez réessayer plus tard.</p>
        )}
        {
            !loading && !error && (
            <article className="product-article">
              {
              products.map((list) => (
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
};
export default UserPage;
