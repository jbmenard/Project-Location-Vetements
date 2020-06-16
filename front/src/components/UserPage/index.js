import React from 'react';
import Avatar from 'src/components/Avatar';
import './style.scss';

const UserPage = () => (
  <div className="header-background">
    <div className="header-avatar">
      <Avatar size="large" />
    </div>
    <div className="header-informations">
      <ul className="header-informations-ul">
        <li>
          Putin Vladimir
        </li>
        <li>
          Russie@hotmail.fr
        </li>
        <li>
          06 87 54 12 65
        </li>
      </ul>
    </div>
  </div>
);

export default UserPage;
