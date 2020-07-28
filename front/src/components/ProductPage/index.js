// == Import npm
import React, { useEffect } from 'react';

import Comment from 'src/containers/Comment';
import Avatar from 'src/components/Avatar';
// import image from '../../assets/images';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
import Button from 'src/components/Button';

const ProductPage = (props) => {
  console.log(props);
  const capitalizeString = (string) => string[0].toUpperCase() + string.slice(1);

  return (
    <div className="productpage">
      <section className="productpage-user">
        <Avatar size="medium" className="productpage-user--photo" avatar={props.product.owner ? props.product.owner.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'} />
        <div className="productpage-user--infos">
          <p className="productpage-user--name">
            {/* // ! pour les vérif comparer app_user_id avec l'id du user si connecté */}
            <NavLink to={`/user/${props.product.app_user_id}`}>
              {props.product.owner
                ? props.product.owner.AppUserInfo.first_name
                : 'Mon profil'}
            </NavLink>
            <p className="productpage-user--owner">{props.product.owner ? props.product.owner.email : '' }</p>
          </p>
        </div>
      </section>
      {(props.product.image !== null)
        ? <img className="productpage--photo" src={props.product.image} alt="Image Produit" />
        : <i className="fas fa-tshirt fa-5x icon-center" />}
      <section className="productpage-infos">
        <h1 className="productpage-infos--title">{capitalizeString(props.product.name)}</h1>
        <p className="productpage-infos--item">Taille: {props.product.size}</p>
        <p className="productpage-infos--item">Etat: {props.product.status}</p>
        <p className="productpage-infos--price">{props.product.price} €/jour</p>
      </section>
      {/* <section className="productpage-button">
      <Button size="medium" value="Louer" />
    </section> */}
      <Comment product={props.product} />
    </div>
  );
};

// == Export
export default ProductPage;
