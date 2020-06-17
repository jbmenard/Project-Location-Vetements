import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/Logo.png';

const Header = () => (
<>
<header className="container">
<div className="menu">
<a href=""> <img className="menu-img" src={Logo} alt="logo" /> </a>
<nav className="menu-nav">
<span className="menu-toggle"> ☰ </span>
</nav>
</div>
</header>
<div className="liens">
<h3 className="liens-title">Login</h3>
<div className="liens-inputs">
<label className="liens--label" htmlFor="email">
Email
</label>
<input className="liens--input" type="email" placeholder="Votre email" />
<label className="liens--label" htmlFor="password"> Password</label>
<input className="liens--input" type="password" placeholder="Votre password" />
</div>

<ul className="liens-items">
<label className="item--title" htmlFor=""> Rechercher</label>
<input className="item--input" type="search" placeholder="Votre recherche" />
<li className="item"><a href="#"> Accueil</a> </li>
<li className="item"><a href="#"> Parcourir</a> </li>
     <li className="item"><a href="#"> Comment ça marche ?</a> </li>
</ul>
</div>
</>
);

export default Header;
