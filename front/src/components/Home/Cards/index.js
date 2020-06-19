import React from 'react';
import './styles.scss';
import Fleur from '../../../assets/images/fleur.jpg';

const Cards = ({ title, text }) => (

  <div className="card">
    <img className="card-img-top" src={Fleur} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>

    </div>
  </div>
);

export default Cards;
