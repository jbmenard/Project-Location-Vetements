import React from 'react';
import './style.scss';
import avatar from '../../assets/images/Putin.jpg';

const Avatar = ({size}) => {
  return (
    <>
      <img className={`image-round image-${size}`} src={avatar} alt="putin profil" />
    </>
  );
};

export default Avatar;
