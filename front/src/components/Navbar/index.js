import React from 'react';
import './styles.scss';
import { NavLink, Redirect } from 'react-router-dom';
import Button from 'src/components/Button';
import Search from 'src/containers/search';

const Navbar = ({
  errorNotFoundProduct, errorNotFoundUser, toggleMenu, toggleNavbar, handleLogout, changeValueEmail, changeValuePassword, user, email, password, connectUser, isLoggin, toggleRedirection,
}) => {
// const handleClick = () => {
//   console.log("oui")
// }
  console.log(user);

  return (
    <>
      <div className={`${toggleMenu ? 'liens liens--open' : 'liens'}`}>
        <div className="container-menu">
          <h3 className="liens-title">o'loc</h3>
        </div>
        <div className="liens-inputs">
          {isLoggin && (
            <>
              <NavLink to={`/user/${user.user.id}`} className="item" onClick={toggleNavbar}><i className="fa fa-unlock" /></NavLink>
              <h2 className="title-loggin">Bienvenue chez O'loc ! </h2>
            </>
          )}

          {!isLoggin
            && (
            <form className="classform" onSubmit={connectUser}>
              <label className="liens--label" htmlFor="email">
                <span className="connexion">Connexion</span>
                {errorNotFoundUser
              && <p className="user-not-found">Aucun utilisateur ne correspond</p>}
                <input className="liens--input" onChange={changeValueEmail} type="email" name="email" id="email" defaultValue={email} placeholder="Votre email" />
              </label>
              <label className="liens--label" htmlFor="password">

                <input className="liens--input" onChange={changeValuePassword} name="password" id="password" type="password" placeholder="Votre password" />
              </label>
              <div className="container-button">
                <Button type="submit" color="menu" value="Se connecter" size="medium" />
                <NavLink to="/inscription" className="item" onClick={toggleNavbar}> <i className="fa fa-user-plus" /></NavLink>
              </div>
            </form>
            )}
        </div>

        <div className="liens-items">
          <Search errorToggle={errorNotFoundProduct} />
          <div className="container-navlink">
            <NavLink to="/" className="item" onClick={toggleNavbar}>Accueil</NavLink>
            <NavLink to="/products" className="item" onClick={toggleNavbar}>Produits</NavLink>
            <NavLink to="/information" onClick={toggleNavbar} className="item">Comment ça marche ?</NavLink>
            {isLoggin
          && (
            <>
              <NavLink to={`/user/${user.user.id}`} className="item" onClick={toggleNavbar}>Profile</NavLink>
              <NavLink to="/newproduct" onClick={toggleNavbar} className="item">Nouveau produit</NavLink>
              
            </>
          )}
            {/* <NavLink to="/information" className="item" onClick={toggleNavbar}> Comment ça marche ?</NavLink> */}
          </div>
          {isLoggin
            && (
            <div onClick={handleLogout}>

              <Button type="button" size="x-large" value="Déconnection" color="orangelight" />
            </div>
            )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
