// == Import npm
import React from 'react';
import Button from 'src/components/Button';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import { getUrlByName } from '../../selectors/product';

// == Composant
const CardDesign = ({ object }) => {
  // console.log('obj', object);
  console.log(getUrlByName(object.name))

  return (
    <div className="card">
      <header className="card-header">
         <NavLink
        className="card-header-disponibility"
        to="/updateproduct"
      >
        {/* <i className="fa fa-pencil" aria-hidden="true" /> */}
        Modifier
      </NavLink>
        <p className="card-header-price">{object.price}€</p>
      </header>
      <section>
        <img className="card-body-image" src="https://img5.onthesnow.com/image/sm/52/caract%C3%A9ristiques_dune_bonne_tenue_de_ski_1_521068.jpg" alt="ski" />
      </section>
      <div className="card-button">
        <Link
          to={{
            pathname: getUrlByName(object.name),
            state: {
              product: object,
            },
          }}
          key={object.id}
        >
          <Button type="button" size="x-large" color="aero-blue" value="Description" />
        </Link>
      </div>

    </div>
  );
};

// == Export
export default CardDesign;
