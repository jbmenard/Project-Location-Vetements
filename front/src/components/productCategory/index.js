import React from 'react';
import CardDesign from 'src/components/CardDesign';
import Footer from 'src/components/Footer';
import './style.scss';

const ProductCategory = () => (
  <div className="product">
    <div className="product-header">
      <p className="burger">burger</p>
      <p className="header">header</p>
    </div>
    <div className="product-event">
      <label htmlFor="subCategory">
        Catégory :
        <select name="subCategory" id="subCategory">
          <option value="sport">sport</option>
          <option value="évènement">évènement</option>
          <option value="Accessoires">Accessoires</option>

        </select>
      </label>
      <label htmlFor="subCategory">
        Sous-Catégory :
        <select name="subCategory" id="subCategory">
          <option value="sportDeGlisse">sportDeGlisse</option>
          <option value="soireeEtFete">soireeEtFete</option>
          <option value="mariage">mariage</option>
          <option value="maroquinerie">maroquinerie</option>
        </select>
      </label>
    </div>
    <section className="product-section">
      <article className="product-article1">
        <CardDesign />
      </article>
      <article className="product-article2">
        <CardDesign />
      </article>
    </section>
    <footer className="product-footer">
      <Footer />
    </footer>
  </div>
);
export default ProductCategory;
