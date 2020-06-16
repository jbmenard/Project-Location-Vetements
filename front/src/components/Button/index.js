import React from 'react';
import './style.scss';

const Button = ({value, size}) => {
  return (
    <>
      <button className={`button button-${size}`} type="button">{value}</button>
    </>
  );
};

export default Button;
