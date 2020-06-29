// == Import npm
import React, { useEffect } from 'react';

import Comment from 'src/containers/Comment';
// import image from '../../assets/images';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
import Button from 'src/components/Button';

const ProductPage = (props) => {
  console.log('product Page', props);
  return (
    <div className="productpage">
      {/* <img className="productpage--photo" src={object.image ? object.image : 'Pas de photo'} alt="parrain" /> */}
      <section className="productpage-user">
        {/* <img className="productpage-user--photo" src="https://image.flaticon.com/icons/png/512/64/64572.png" alt="avatar" /> */}
        <div className="productpage-user--infos">
          <p className="productpage-user--name">
            {/* // ! pour les vérif comparer app_user_id avec l'id du user si connecté */}
            <NavLink to={`/user/${props.location.state.product.app_user_id}`}>
              {props.location.state.product.owner ?
                props.location.state.product.owner.AppUserInfo.first_name
                : 'Mon profil'}
            </NavLink>
          </p>
          <p className="productpage-user--note">23 évaluations - 4,3 / 5</p>
        </div>
      </section>
      <section className="productpage-infos">
        <h1 className="productpage-infos--title">Déguisement de parrain de la street</h1>
        <p className="productpage-infos--item">M / 38 / 10 - Impeccable - Giorgio Armani</p>
        <p className="productpage-infos--price">{props.location.state.product.price} $</p>
      </section>
      <section className="productpage-button">
        <Button size="medium" value="Louer" />
      </section>
      <section className="productpage-suggest">
        <div className="productpage-suggest--item">PRODUIT 1</div>
        <div className="productpage-suggest--item">PRODUIT 2</div>
      </section>
      <Comment comments={product.comments} />
    </div>
  );
};

// == Export
export default ProductPage;
