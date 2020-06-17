import React from 'react';
// import _ from 'lodash';

import './style.scss';

const AddProduct = ({ createProduct }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(event);
  };
  return (
    <div className="add-product">
      <h1 className="add-product--title">Ajouter un produit</h1>
      <form className="add-product--form" method="post" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">
          Nom du produit :
          <input className="add-product--input" type="text" name="name" />
        </label>
        <label htmlFor="subCategory">
          Catégorie :
          <select className="add-product--select" name="subCategory" id="subCategory">
            <option value="sportDeGlisse">Sports de Glisse</option>
            <option value="soireeEtFete">Soirées et Fêtes</option>
            <option value="mariage">Mariages</option>
            <option value="maroquinerie">Maroquinerie</option>
          </select>
        </label>
        <label htmlFor="name">Marque :
          <input className="add-product--input" type="text" name="name" />
        </label>
        <label htmlFor="gender">
          Genre
          <select className="add-product--select" name="gender" id="gender">
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="femme">Enfant</option>
          </select>
        </label>
        <label htmlFor="size">
          Taille
          <select className="add-product--select" name="size" id="size">
            <option value="xsmall">XS</option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xlarge">XL</option>
            <option value="2xlarge">XXL</option>
            <option value="3xlarge">3XL</option>
          </select>
        </label>
        <label htmlFor="state">
          Etat du produit :
          <select className="add-product--select" name="state" id="state">
            <option value="neverUsed">Jamais porté</option>
            <option value="likeNew">Comme neuf</option>
            <option value="used">Usé</option>
            <option value="toGive">A donner</option>
          </select>
        </label>
        <label htmlFor="price">
          Prix :
          <input className="add-product--input" type="number" name="price" id="price" />
        </label>
        <div className="add-product-submit">
          <input className="add-product-submit--input" type="submit" value="Créer produit" />
        </div>
      </form>
    </div>
  )
};

export default AddProduct;
