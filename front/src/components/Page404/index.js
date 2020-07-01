import React from 'react';
import Button from 'src/components/Button';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Page404 = () => (
  <>
    <div className="title-error">
      <h2 className="title-error-oops">OOPS <span className="title-error-oops-span">!</span></h2>
      <p className="title-error-404">404 - THE PAGE CAN'T BE FOUND</p>
      <NavLink to="/"><Button type="button" size="small" color="orange" value="Go to Home" /></NavLink>
    </div>
  </>
);

export default Page404;
