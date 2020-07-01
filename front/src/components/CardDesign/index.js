// == Import npm
import React from 'react';
import Button from 'src/components/Button';
import { Link, NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { getUrlByName, getUpdateUrlByName } from '../../selectors/product';

// == Icons
// import Update from '../../assets/images/update-product.png';
// import Delete from '../../assets/images/delete-product.png';

// == Composant
const CardDesign = ({
  object,
  deleteProduct,
  user,
  isLogged,
}) => {
  const handleClick = (id) => deleteProduct(id);
  const checkUser = (userId, productId) => {
    if (userId === productId) {
      return true;
    }

    return false;
  };
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-price">{object.price}€</p>
        <section className="card-header-icon">
          { isLogged && checkUser(user.user.id, object.app_user_id)
          && (
            <>
              <NavLink
                to={getUpdateUrlByName(object.name)}
              >
                {/* <img
                  className="card-header-icon--update"
                  src={Update}
                  alt="update-product"
                /> */}
                <i className="card-header-icon--update fa fa-cog" aria-hidden="true" />
              </NavLink>
              <i className="card-header-icon--delete fa fa-times" aria-hidden="true" onClick={() => handleClick(object.id)} />
            </>
          )}
        </section>
      </header>
      <section>
        <img className="card-body-image" src="https://img5.onthesnow.com/image/sm/52/caract%C3%A9ristiques_dune_bonne_tenue_de_ski_1_521068.jpg" alt="ski" />
      </section>
      <div className="card-footer">
        <section className="card-footer--button">
          <NavLink
            to={{
              pathname: getUrlByName(object.name),
              // state: {
              //   productFormCard: object,
              // },
            }}
            key={object.id}
          >
            <Button type="button" size="x-large" color="orange" value="Description" />
          </NavLink>
        </section>
      </div>
    </div>
  );
};

// == Export
export default CardDesign;
