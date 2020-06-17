import React from 'react';
// import _ from 'lodash';
import './style.scss';

const ProductFrom = () => {
  return (
    <div>
      <form method="post">
        <label htmlFor="name">
          Nom du produit
          <input type="text" name="name" />
        </label>
        <label htmlFor="gender">
          Genre
          <select name="gender" id="gender">
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </label>
        <label htmlFor="size">
          Taille
          <select name="size" id="size">
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extremLarge">XL</option>
          </select>
        </label>
        <label htmlFor="state">
          Etat du produit :
          <select name="state" id="state">
            <option value="neverUsed">Jamais porté</option>
            <option value="likeNew">Comme neuf</option>
            <option value="used">Usé</option>
            <option value="toGive">A donner</option>
          </select>
        </label>
        <label htmlFor="price">
          Prix :
          <input type="number" name="price" id="price" />
        </label>
        <label htmlFor="subCategory">
          Catégory :
          <select name="subCategory" id="subCategory">
            <option value="sportDeGlisse">sportDeGlisse</option>
            <option value="soireeEtFete">soireeEtFete</option>
            <option value="mariage">mariage</option>
            <option value="maroquinerie">maroquinerie</option>
          </select>
        </label>
      </form>
    </div>
  )
};
export default ProductFrom;
