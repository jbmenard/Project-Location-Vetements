import React, {useEffect } from 'react';
import CardDesign from 'src/components/CardDesign';

import './style.scss';



const ProductCategory = ({ loading, error, listProducts}) => {
console.log(listProducts);

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
      <>
        {!loading && error && (
          <p className="loading-error">Une erreur s'est produite.Veuillez réessayer plus tard.</p>
        )}
        {
          !loading && !error && (
          <article className="product-article">
            {
            listProducts.map((list) => (
              <CardDesign object={list} />

            ))
          }
          </article>
          )
        }
        {loading && (
          <p className="loading">Veuillez patientez. Les articles chargent.</p>
        )}
      </>
    </>
  );
};
export default ProductCategory;
