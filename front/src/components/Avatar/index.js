import React from 'react';
import './style.scss';
import avatarDefault from '../../assets/images/Putin.jpg';

const Avatar = ({ size, avatar }) => (
  <>
    <img className={`image-round image-${size}`} src={avatar || 'http://www.clker.com/cliparts/5/9/4/c/12198090531909861341man%20silhouette.svg.med.png'} alt="putin profil" />
  </>
);

export default Avatar;
