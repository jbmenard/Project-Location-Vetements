import React from 'react';
// import _ from 'lodash';

import './style.scss';

const AddProduct = ({ createProduct, onChangeName, onSelectGender, onChangePrice, onSelectorSize, onSelectorState, onSelectSubCategory }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(event);
  };

  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };

  const handleSelectGender = (event) => {
    onSelectGender(event.target.value);
  };

  const handleSelectSize = (event) => {
    onSelectorSize(event.target.value);
  };

  const handleSelectState = (event) => {
    onSelectorState(event.target.value);
  };

  const handleChangePrice = (event) => {
    onChangePrice(event.target.value);
  };

  const handleSelectSubCategory = (event) => {
    onSelectSubCategory(event.target.value);
  };
  return (
    <div>
      <form method="post" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">
          Nom du produit
          <input type="text" name="name" onChange={handleChangeName} />
        </label>
        <label htmlFor="gender">
          Genre
          <select name="gender" id="gender" onChange={handleSelectGender}>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </label>
        <label htmlFor="size">
          Taille
          <select name="size" id="size" onChange={handleSelectSize}>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extremLarge">XL</option>
          </select>
        </label>
        <label htmlFor="state">
          Etat du produit :
          <select name="state" id="state" onChange={handleSelectState}>
            <option value="neverUsed">Jamais porté</option>
            <option value="likeNew">Comme neuf</option>
            <option value="used">Usé</option>
            <option value="toGive">A donner</option>
          </select>
        </label>
        <label htmlFor="price">
          Prix :
          <input type="number" name="price" id="price" onChange={handleChangePrice} />
        </label>
        <label htmlFor="subCategory">
          Catégory :
          <select name="subCategory" id="subCategory" onChange={handleSelectSubCategory}>
            <option value="sportDeGlisse">sportDeGlisse</option>
            <option value="soireeEtFete">soireeEtFete</option>
            <option value="mariage">mariage</option>
            <option value="maroquinerie">maroquinerie</option>
          </select>
        </label>
        <input type="submit" value="Créer produit" />
      </form>
    </div>
  )
};
export default AddProduct;
