import React from 'react';

const Slide = ({ photo, text }) => (
  <div className="carousel-item">
    <div>
      <img className="d-block img-fluid " src={photo} alt="" />
      <div className="mask rgba-black-strong" ></div>
    </div>
    <div className="carousel-caption">
      <h3 className="h3-responsive">{text}</h3>
      {/* <p>PHRASE D'ACCROCHE</p> */}
    </div>
  </div>
);

export default Slide;
