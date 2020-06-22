import React from 'react';
import './style.scss';

const Button = ({value, size, color, type}) => {
  return (
    <>
      <button className={`button button-${size} button-${color}`} type= {type}>{value}</button>
    </>
  );
};

export default Button;
