// == Import npm
import React from 'react';
import Button from 'src/components/Button';
import { Link, NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { getUrlByName } from '../../selectors/product';

// == Icons
import Update from '../../assets/images/update-product.png';
// import Delete from '../../assets/images/delete-product.png';

// == Composant
const CardDesign = ({ 
  object,
  deleteProduct,
}) => {
  const handleClick = (id) => {
    return deleteProduct(id);
  };
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-price">{object.price}€</p>
        <section className="card-header-icon">
          <NavLink
            to="/updateproduct"
          >
            <img
              className="card-header-icon--update"
              src={Update}
              alt="update-product"
            />
          </NavLink>
          <i className="card-header-icon--delete fa fa-times" aria-hidden="true" onClick={() => handleClick(object.id)} />
        </section>
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
