import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Button from 'src/components/Button';
import Search from 'src/containers/search'
import { changeText } from '../../actions/search';

const Navbar = ({ toggleMenu, toggleNavbar, handleLogout }) => {
  // const handleClick = () => {
  //   console.log("oui")
  // }
  
  console.log(toggleMenu);

  return (
    <>
      <div className={`${toggleMenu ? 'liens liens--open' : 'liens'}`}>
        <h3 className="liens-title">Menu</h3>
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
          <Search />
          <NavLink to="/" className="item" onClick={toggleNavbar}>Accueil</NavLink>
          <NavLink to="/products" className="item" onClick={toggleNavbar}>Produits</NavLink>
          <NavLink to="/ailleurs" onClick={toggleNavbar} className="item">Parcourir</NavLink>
          <NavLink to="/information" className="item" onClick={toggleNavbar}> Comment ça marche ?</NavLink>
          {/* <div onClick={handleLogout}>
            <Button type="button" size="x-large" value="déconnection" color="orangelight" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
