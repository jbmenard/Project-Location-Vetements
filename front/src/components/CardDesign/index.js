// == Import npm
import React from 'react';
import Button from 'src/components/Button';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { getUrlByName } from '../../selectors/product';

// == Composant
const CardDesign = ({
  object,
  updateProduct,
  deleteProduct,
}) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-price">{object.id}€</p>
        <section className="icons">
          <div className="icon-cog">
            <i className="fa fa-cog" aria-hidden="true" onClick={() => updateProduct(object.id)} />
          </div>
          <div className="icon-trash">
            <i className="fa fa-times" aria-hidden="true" onClick={() => deleteProduct(object.id)} />
          </div>
        </section>
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
};

// == Export
export default CardDesign;
