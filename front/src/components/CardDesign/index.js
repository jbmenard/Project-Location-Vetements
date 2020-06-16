// == Import npm
import React from 'react';
import Button from 'src/components/Button';

// == Import
import './styles.scss';

// == Composant
const CardDesign = () => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-disponibility">Disponible</p>
      <p className="card-header-price">Price</p>
    </header>
    <body>
      <img className="card-body-image" src="https://img5.onthesnow.com/image/sm/52/caract%C3%A9ristiques_dune_bonne_tenue_de_ski_1_521068.jpg" alt="ski" />
    </body>
    <footer className="card-footer">
      <Button size="small" value="Description" />
    </footer>
  </div>
);

// == Export
export default CardDesign;
