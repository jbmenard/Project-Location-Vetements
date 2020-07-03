import React from 'react';
import './style.scss';

const Slide = ({ photo, text }) => (
  <div className="carousel-item">
    <div>
      <img className="d-block img-fluid " src={photo} alt="" />
      <div className="mask rgba-black-strong" ></div>
    </div>
    <div className="carousel-caption">
      <h3 className="h3-responsive">{text}</h3>
    </div>
  </div>
);

export default Slide;
