import React from 'react';
import './styles.scss';

const Cards = ({
  title, text, image, number,
}) => (
  <>

    <div className="col-md-4">
      <div className="card-menu text-center">
        <div className="backgroud">
          <div className="card-menu-body">
            <div className="card-menu-image">
              <img src={image} alt="" className="image" />
            </div>
            <div className="card-menu-text">
              <h5 className="card-menu-title"><span className="number">{number}</span>{title}</h5>
              <p className="card-menu-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Cards;
