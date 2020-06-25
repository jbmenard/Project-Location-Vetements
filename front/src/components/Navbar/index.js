import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Button from 'src/components/Button';
import Search from 'src/containers/search'

const Navbar = ({
  toggleMenu, toggleNavbar, handleLogout, changeValueEmail, changeValuePassword, userData, connectUser, isLoggin,
}) => {
  // const handleClick = () => {
  //   console.log("oui")
  // }

  console.log(toggleMenu);

  return (
    <>
      <div className={`${toggleMenu ? 'liens liens--open' : 'liens'}`}>
        <div className="container-menu">
          <h3 className="liens-title">o'loc</h3>
        </div>
        <div className="liens-inputs">
          {!isLoggin
            && (
            <form onSubmit={connectUser}>
              <label className="liens--label" htmlFor="email">
                <span>Connexion</span>
                <input className="liens--input" onChange={changeValueEmail} type="email" name="email" id="email" placeholder="Votre email" />
              </label>
              <label className="liens--label" htmlFor="password">
                
                <input className="liens--input" onChange={changeValuePassword} name="password" id="password" type="password" placeholder="Votre password" />
              </label>
              <Button type="submit" color="menu" value="Se connecter" size="medium" />
            </form>
            )}
        </div>

        <div className="liens-items">
          <Search />
          <NavLink to="/" className="item" onClick={toggleNavbar}>Accueil</NavLink>
          <NavLink to="/products" className="item" onClick={toggleNavbar}>Produits</NavLink>
          {isLoggin
          && <NavLink to={`/user/${userData.id}`} className="item" onClick={toggleNavbar}>Profile</NavLink>}
          <NavLink to="/ailleurs" onClick={toggleNavbar} className="item">Parcourir</NavLink>
          <NavLink to="/information" className="item" onClick={toggleNavbar}> Comment ça marche ?</NavLink>
          {isLoggin
            && (
            <div onClick={handleLogout}>
              <Button type="button" size="x-large" value="déconnection" color="orangelight" />
            </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
