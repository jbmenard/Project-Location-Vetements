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

    {/* ----------------------- OUR TEAM -------------------------- */}
    <h1 className="title-team"> NOTRE TEAM </h1>
    <div className="container-team row">
      <div className="col-lg-3 col md-6">
        <div className="card-team">
          <div className="card-team-body">
            <img src={Roman} alt="Roman" className=" avatar img-fluid rounded-circle w-50 mb-3" />
            <div className="container-text">
              <h3 className="card-team-title">Roman</h3>
              <h5 className="card-team-subtitle"> Product Owner</h5>
              <p className="card-team-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a odio fugit labore nihil alias ut deleniti quaerat! Nesciunt eligendi illo</p>
              <div className="d-flex flex-row justify-content-center">
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-facebook"  />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-twitter"  />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card-team">
          <div className="card-team-body">
            <img src={JB} alt="JB" className="avatar img-fluid rounded-circle w-50 mb-3" />
            <div className="container-text">
              <h3 className="card-team-title">Jean-Baptiste</h3>
              <h5 className="card-team-subtitle"> Scrum Master & Developer</h5>
              <p className="card-team-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a odio fugit labore nihil alias ut deleniti quaerat! Nesciunt eligendi illo</p>
              <div className="d-flex flex-row justify-content-center ">
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-facebook" id="icon" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-twitter" id="icon" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-instagram" id="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card-team">
          <div className="card-team-body">
            <img src={Clarisse} alt="" className=" avatar img-fluid rounded-circle w-50 mb-3" />
            <div className="container-text">
              <h3 className="card-team-title">Clarisse</h3>
              <h5 className="card-team-subtitle"> Lead Front</h5>
              <p className="card-team-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a odio fugit labore nihil alias ut deleniti quaerat! Nesciunt eligendi illo</p>
              <div className="d-flex flex-row justify-content-center">
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-facebook" id="icon" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-twitter" id="icon" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-instagram" id="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card-team">
          <div className="card-team-body">
            <img src={Kevin} alt="" className="avatar img-fluid rounded-circle w-50 mb-3" />
            <div className="container-text">
              <h3 className="card-team-title">Kevin</h3>
              <h5 className="card-team-subtitle"> Lead Back</h5>
              <p className="card-team-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a odio fugit labore nihil alias ut deleniti quaerat! Nesciunt eligendi illo</p>
              <div className="d-flex flex-row justify-content-center">
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-facebook" id="icon" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-twitter" id="icon" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <i className="fa fa-instagram" id="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
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
