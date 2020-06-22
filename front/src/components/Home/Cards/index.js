import React from 'react';
import './styles.scss';


const Cards = ({ title, text, number }) => (
  <>

    <div className="col-md-4">
      <div className="card-menu text-center">

        <div className="card-menu-body">
          <div className="card-menu-number">
            <h1 className="text-number">{number}</h1>
          </div>
          <div className="card-menu-text">
            <h5 className="card-menu-title">{title}</h5>
            <p className="card-menu-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Cards;
