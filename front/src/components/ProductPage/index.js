// == Import npm
import React from 'react';
import Button from 'src/components/Button';

// == Import
import './styles.scss';

// == Composant
const ProductPage = () => (
  <div className="productpage">
    <header className="productpage-header">
      <p>HEADER</p>
    </header>
    <img className="productpage-photo" src="https://i.ebayimg.com/images/g/jZYAAOSw9ytdU9mt/s-l300.jpg" alt="parrain" />
    <p className="productpage-user">Le Sicilien - 23 évaluations</p>
    <section className="productpage-infos">
      <h1 className="productpage-infos--title">Déguisement de parrain de la street</h1>
      <p className="productpage-infos--item">M / 38 / 10 - Impeccable - Giorgio Armani</p>
      <p className="productpage-infos--price">1.000.000 $</p>
    </section>
    <section className="productpage-button">
      <Button size="large" value="Louer" />
    </section>
    <section className="others-products">
      <p>AUTRES PRODUITS DE LA MÊME FAMILLE</p>
    </section>
    <footer className="productpage-header">
      <p>FOOTER</p>
    </footer>
  </div>
);

// == Export
export default ProductPage;
