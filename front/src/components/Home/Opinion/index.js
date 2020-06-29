import React from 'react';

const Opinion = ({photo, name, star, text}) => (

  <div className="comment col-md-4 ">
    <div className="comment-photo">
      <img src={photo} className="comment-photo--item"/>
    </div>
    <h3 className="comment-title"> {name}</h3>
    <i className="icon-star">{star}</i>
    <p className="comment-text">{text}</p>
  </div>
);

export default Opinion;
