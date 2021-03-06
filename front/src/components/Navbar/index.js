import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Button from 'src/components/Button';

const Navbar = ({ toggleMenu, toggleNavbar, handleLogout }) => {
  // const handleClick = () => {
  //   console.log("oui")
  // }
  
  console.log(toggleMenu);

  return (
    <>
      <div className={`${toggleMenu ? 'liens liens--open' : 'liens'}`}>
        <h3 className="liens-title">Login</h3>
        <div className="liens-inputs">
          <label className="liens--label" htmlFor="email">
            <span>Email</span>
            <input className="liens--input" type="email" name="email" id="email" placeholder="Votre email" />
          </label>
          <label className="liens--label" htmlFor="password">
            <span>Password</span>
            <input className="liens--input" name="password" id="password" type="password" placeholder="Votre password" />
          </label>
        </div>

        <div className="liens-items">
          <label className="item--title" htmlFor="search">
            <span className="search"> Rechercher</span> 
            <input className="item--input" name="search" id="search" type="search" placeholder="Votre recherche" />
          </label>
          <NavLink to="/" className="item" onClick={toggleNavbar} >Accueil</NavLink>
          <NavLink to="/ailleurs" className="item">Parcourir</NavLink>
          <NavLink to="/information" className="item" onClick={toggleNavbar}> Comment ça marche ?</NavLink>
          <div onClick={handleLogout}>
            <Button type="button" size="x-large" value="déconnection" color="orangelight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
