import React, { useEffect } from 'react';
import CardDesign from 'src/components/CardDesign';
import Footer from 'src/components/Footer';
import './style.scss';

const ProductCategory = ({ listProducts, fetchProducts }) => {
  useEffect(fetchProducts, []);
  return (
    <>
      <div className="product-event">
        <label htmlFor="subCategory" className="label">
          Catégory :
          <select name="subCategory" id="subCategory">
            <option value="sport">sport</option>
            <option value="évènement">évènement</option>
            <option value="Accessoires">Accessoires</option>

          </select>
        </label>
        <label htmlFor="subCategory" className="label">
          Sous-Catégory :
          <select name="subCategory" id="subCategory">
            <option value="sportDeGlisse">sportDeGlisse</option>
            <option value="soireeEtFete">soireeEtFete</option>
            <option value="mariage">mariage</option>
            <option value="maroquinerie">maroquinerie</option>
          </select>
        </label>
      </div>
      <article className="product-article">
        {
          listProducts.map((list) => (
            <CardDesign list={list} />
          ))
        }
      </article>
    </>
  );
};
export default ProductCategory;
