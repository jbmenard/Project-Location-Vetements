// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const CardDesign = () => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-disponibility">Disponible</p>
      <p className="card-header-price">Price</p>
    </header>
    <footer className="card-footer">
      <p className="card-description">Description de l'article</p>
    </footer>
  </div>
);

// == Export
export default CardDesign;
