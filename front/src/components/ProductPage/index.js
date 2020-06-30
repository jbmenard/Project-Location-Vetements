// == Import npm
import React, { useEffect } from 'react';

import Comment from 'src/containers/Comment';
// import image from '../../assets/images';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
import Button from 'src/components/Button';

const ProductPage = (props) => (
  <div className="productpage">
    <section className="productpage-user">
      <img className="productpage-user--photo" src={props.location.state.product.owner ? props.location.state.product.owner.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'} alt="avatar" />
      <div className="productpage-user--infos">
        <p className="productpage-user--name">
          {/* // ! pour les vérif comparer app_user_id avec l'id du user si connecté */}
          <NavLink to={`/user/${props.location.state.product.app_user_id}`}>
            {props.location.state.product.owner
              ? props.location.state.product.owner.AppUserInfo.first_name
              : 'Mon profil'}
          </NavLink>
            <p className="productpage-user--owner">{props.location.state.product.owner ? props.location.state.product.owner.email : '' }</p>
        </p>
      </div>
    </section>
    {(props.location.state.product.image !== null)
      ? <img className="productpage--photo" src={props.location.state.product.image} alt="Image Produit" />
      : <i className="fas fa-tshirt fa-5x icon-center" />}
    <section className="productpage-infos">
      <h1 className="productpage-infos--title">{props.location.state.product.name}</h1>
      <p className="productpage-infos--item">Taille: {props.location.state.product.size}</p>
      <p className="productpage-infos--item">Etat: {props.location.state.product.status}</p>
      <p className="productpage-infos--price">{props.location.state.product.price} $</p>
    </section>
    {/* <section className="productpage-button">
      <Button size="medium" value="Louer" />
    </section> */}
    <Comment product={props.product} />
  </div>
);

// == Export
export default ProductPage;
