import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './style.scss';

import { NavLink } from 'react-router-dom';


const Header = ({ toggleNavbar, toggleMenu }) => {
  return (
    <>
      <div className={`${toggleMenu ? 'header header--open' : 'header'}`}>
        <span className="header-toggle" onClick={toggleNavbar}> ☰ </span>
        <NavLink to="/"> <img className="header-img" src={Logo} alt="logo" /> </NavLink>
      </div>
      
    </>
  );
};

export default Header;
