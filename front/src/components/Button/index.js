import React from 'react';
import './style.scss';

const Button = ({value, size, color}) => {
  return (
    <>
      <button className={`button button-${size} button-${color}`} type="button">{value}</button>
    </>
  );
};

export default Button;
