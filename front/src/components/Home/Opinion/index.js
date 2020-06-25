import React from 'react';


const Opinion = ({name, star, text}) => (

  <div className="comment col-md-4 ">
    <i className="fa fa-user" />
    <h3 className="comment-title"> {name}</h3>
    <i className="icon-star">{star}</i>
    <p className="comment-text">{text}</p>
  </div>
);

export default Opinion;
