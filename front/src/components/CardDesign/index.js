// == Import npm
import React from 'react';
import Button from 'src/components/Button';

// == Import
import './styles.scss';

// == Composant
const CardDesign = ({ list }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-disponibility">Disponible</p>
      <p className="card-header-price">{list.price}€</p>
    </header>
    <section>
      <img className="card-body-image" src="https://img5.onthesnow.com/image/sm/52/caract%C3%A9ristiques_dune_bonne_tenue_de_ski_1_521068.jpg" alt="ski" />
    </section>
    <div className="card-button">
      <Button size="x-large" color="aero-blue" value="Description" />
    </div>

  </div>
);

// == Export
export default CardDesign;
