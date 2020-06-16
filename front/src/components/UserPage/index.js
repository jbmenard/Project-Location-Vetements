import React from 'react';
import Avatar from 'src/components/Avatar';
import CardDesign from 'src/components/CardDesign';
import Button from 'src/components/Button';

import './style.scss';

const UserPage = () => (
  <>
    <div className="header-background">
      <div className="header-avatar">
        <Avatar size="large" />
      </div>
      <div className="header-informations">
        <ul className="header-informations-ul">
          <li className="header-informations-fullname">
            Putin Vladimir
          </li>
          <li>
            Russie@hotmail.ru
          </li>
          <li>
            06 87 54 12 65
          </li>
        </ul>
        <Button color="eggshell" size="small" value="Modifier mon profil" />
      </div>
    </div>
    <h2 className="title-user-page">
      Produits de Vladimir
    </h2>
    <div className="card-list">
      <CardDesign />
      <CardDesign />
      <CardDesign />
      <CardDesign />
    </div>
  </>
);

export default UserPage;
