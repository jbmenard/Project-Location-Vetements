import React from 'react';
import './styles.scss';
import Clarisse from '../../assets/images/clarisse.jpeg';
import Kevin from '../../assets/images/kevin.jpeg';
import Roman from '../../assets/images/roman.jpg';
import JB from '../../assets/images/jb.jpg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-icons">
      <h3 className="footer-title">Retrouvez-nous sur</h3>
      <span className="footer-invider">  </span>

      <i className="fa fa-facebook"  />
      <i className="fa fa-twitter "  />
      <i className="fa fa-instagram " />

    </div>
    <div className="footer-infos">
      <ul className="footer-info">
        <li className="footer-info-title"> A propos </li>
        <li className="footer-info-title"> Le concept</li>
        <li className="footer-info-title"> Contact</li>
        <li className="footer-info-title"> FAQ</li>
        <li className="footer-info-title"> Livraison et Retour </li>
      </ul>
    </div>
    <div className="footer-mentions">
      <ul className="footer-mentions-infos">
        <li className="footer-mentions-info">CGL</li>
        <li className="footer-mentions-info">Mentions légales</li>
        <li className="footer-mentions-info">Politiques de confidentialité</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
