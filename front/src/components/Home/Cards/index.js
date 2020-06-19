import React from 'react';
import './styles.scss';
import CardImage from '../../../assets/images/card.png';


const Cards = ({ title, text }) => (
  <>
  
  <div className="card">
    <img className="card-img-top" src={CardImage} alt="Card image cap" />
   
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>

    </div>
  </div>
  </>
);

export default Cards;
