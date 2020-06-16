import React from 'react';
import CardDesign from 'src/components/CardDesign';
import './style.scss';

const ProductCategory = () => (
  <div className="product">
    <div className="product-header">
      <p className="burger">burger</p>
      <p className="header">header</p>
    </div>
    <div className="product-event">
      <p className="event">event</p>
      <p className="deguisement">deguisement</p>
    </div>
    <section className="product-section">
      <article className="product-article1">
        <CardDesign />
      </article>
      <article className="product-article2">
        <p>pantalon</p>
      </article>
    </section>
    <footer className="product-footer">
      <p className="footer">footer</p>
    </footer>
  </div>
);
export default ProductCategory;
