import React from 'react';
import './styles.scss';


const Navbar = ({ toggleMenu }) => (
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

      <ul className="liens-items">
        <label className="item--title" htmlFor="search">
          Rechercher
          <input className="item--input" name="search" id="search" type="search" placeholder="Votre recherche" />
        </label>
        <li className="item"><a href="#"> Accueil</a> </li>
        <li className="item"><a href="#"> Parcourir</a> </li>
        <li className="item"><a href="#"> Comment ça marche ?</a> </li>
      </ul>
    </div>
  </>
);

export default Navbar;
