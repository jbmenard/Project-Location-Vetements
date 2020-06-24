// == Import npm
import React from 'react';
import Button from 'src/components/Button';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { getUrlByName } from '../../selectors/product';

// == Composant
const CardDesign = ({ object }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-disponibility">Disponible</p>
      <p className="card-header-price">{object.price}€</p>
    </header>
    <section>
      <img className="card-body-image" src="https://img5.onthesnow.com/image/sm/52/caract%C3%A9ristiques_dune_bonne_tenue_de_ski_1_521068.jpg" alt="ski" />
    </section>
    <div className="card-button">
      <NavLink
        to={getUrlByName(object.name)}
        key={object.id}
      >
        <Button type="button" size="x-large" color="aero-blue" value="Description" />
      </NavLink>
    </div>

  </div>
);

// == Export
export default CardDesign;
