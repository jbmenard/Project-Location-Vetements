import React from 'react';
import './style.scss';
import Button from 'src/components/Button';

const Slide = ({ photo, text }) => (
  <div className="carousel-item">
    <div>
      <img className="d-block img-fluid " src={photo} alt="" />
      <div className="mask rgba-black-strong" ></div>
    </div>
    <div className="carousel-caption">
      <h3 className="h3-responsive">{text}</h3>
      <a href="/products"> <Button type="button" size="x-large" color="orange" value="Notre catalogue" /></a>
    </div>
  </div>
);

export default Slide;
