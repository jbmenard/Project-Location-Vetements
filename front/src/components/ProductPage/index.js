// == Import npm
import React from 'react';
import Button from 'src/components/Button';

// == Import
import './styles.scss';

// == Composant
const ProductPage = ({ product }) => {
  console.log(product);
  
  return (
    <div className="productpage">
      <header className="productpage-header">
        <p>HEADER</p>
      </header>
      <img className="productpage-photo" src="https://i.ebayimg.com/images/g/jZYAAOSw9ytdU9mt/s-l300.jpg" alt="parrain" />
      <section className="productpage-user">
        <img className="productpage-user--photo" src="https://image.flaticon.com/icons/png/512/64/64572.png" alt="avatar" />
        <div className="productpage-user--infos">
          <p className="productpage-user--name">{product.owner.AppUserInfo.first_name}</p>
          <p className="productpage-user--note">23 évaluations - 4,3 / 5</p>
        </div>
      </section>
      <section className="productpage-infos">
        <h1 className="productpage-infos--title">Déguisement de parrain de la street</h1>
        <p className="productpage-infos--item">M / 38 / 10 - Impeccable - Giorgio Armani</p>
        <p className="productpage-infos--price">{product.price} $</p>
      </section>
      <section className="productpage-button">
        <Button size="medium" value="Louer" />
      </section>
      <section className="productpage-suggest">
        <div className="productpage-suggest--item">PRODUIT 1</div>
        <div className="productpage-suggest--item">PRODUIT 2</div>
      </section>
      <footer className="productpage-header">
        <p>FOOTER</p>
      </footer>
    </div>
  );
};

// == Export
export default ProductPage;
