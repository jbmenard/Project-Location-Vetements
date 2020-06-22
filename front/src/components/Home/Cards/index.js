import React from 'react';
import './styles.scss';
import CardImage from '../../../assets/images/card.png';

const Cards = ({ title, text, number }) => (
  <>

    <div className="col-md-4">
      <div className="card text-center">

        <div className="card-body">
          <div className="card-number">
            <h1 className="text-number">{number}</h1>
          </div>
          <div className="card-text">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Cards;
