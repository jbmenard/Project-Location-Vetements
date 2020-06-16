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
    <div className="productpage-photo">
      <p>Photo</p>
    </div>
    <section className="productpage-infos">
      <h1 className="productpage-infos--title">NOM DU PRODUIT</h1>
      <p className="productpage-infos--item">Prix :</p>
      <p className="productpage-infos--item">Loué par :</p>
      <p className="productpage-infos--item">Marque :</p>
      <p className="productpage-infos--item">Taille :</p>
      <p className="productpage-infos--item">État du produit :</p>
    </section>
    <section className="productpage-button">
      <Button size="small" value="Louer" />
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
