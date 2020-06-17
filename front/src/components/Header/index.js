import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './style.scss';

const Header = ({ toggleNavbar, toggleMenu }) => {
  return (
    <>
      <div className={`${toggleMenu ? 'header header--open' : 'header'}`}>
        <span className="header-toggle" onClick={toggleNavbar}> ☰ </span>
        <a href=""> <img className="header-img" src={Logo} alt="logo" /> </a>
      </div>
    </>
  );
};

export default Header;
