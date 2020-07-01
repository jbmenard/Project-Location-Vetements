import React from 'react';
// import _ from 'lodash';

import './style.scss';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';

const UpdateProduct = ({
  updateProduct,
  onChangeName,
  onSelectGender,
  onChangePrice,
  onSelectorSize,
  onSelectorState,
  onSelectSubCategory,
  onSelectMark,
  onChangeDescription,
  onChangeImage,
  product,
}) => {
  const handleSubmit = (event, productId) => {
    event.preventDefault();
    updateProduct(productId);
  };

  const handleChangeName = (event) => {
    onChangeName(event.target.value, event.target.name);
  };

  const handleSelectGender = (event) => {
    onSelectGender(event.target.value, event.target.name);
  };

  const handleSelectMark = (event) => {
    onSelectMark(event.target.value, event.target.name);
  };

  const handleSelectSize = (event) => {
    onSelectorSize(event.target.value, event.target.name);
  };

  const handleSelectState = (event) => {
    onSelectorState(event.target.value, event.target.name);
  };

  const handleChangePrice = (event) => {
    onChangePrice(event.target.value, event.target.name);
  };

  const handleSelectSubCategory = (event) => {
    onSelectSubCategory(event.target.value, event.target.name);
  };

  const handleChangeDescription = (event) => {
    onChangeDescription(event.target.value, event.target.name);
  };

  const handleChangeImage = (event) => {
    console.log(event.target.files[0]);
    onChangeImage(event.target.files[0], event.target.name);
  };
  console.log(product);

  return (
    <div className="update-product">
      <h1 className="update-product--title">Modifier le produit</h1>
      <form className="update-product--form" onSubmit={(event) => handleSubmit(event, product.id)}>
        <label htmlFor="name">
          Nom du produit :
          <input className="update-product--input" type="text" placeholder={product.name} name="name" id="name" onChange={handleChangeName} />
        </label>
        <label htmlFor="sub_category_id">
          Catégorie :
          <select className="update-product--select" defaultValue={product.sub_category} name="sub_category_id" id="sub_category_id" onChange={handleSelectSubCategory}>
            <option value="">Choisir :</option>
            <option value="1">Sports de Glisse</option>
            <option value="2">Sports nautiques</option>
            <option value="3">Equitation</option>
            <option value="4">Sports de combat</option>
            <option value="5">Sports mécaniques</option>
            <option value="6">Mariages</option>
            <option value="7">Soirées et Fêtes</option>
            <option value="8">Déguisements</option>
            <option value="9">EVJ/EVG</option>
            <option value="10">Enterrement</option>
            <option value="11">Maroquinerie</option>
            <option value="12">Bijoux</option>
            <option value="13">Chapeaux</option>
            <option value="14">Sacs</option>
          </select>
        </label>
        <label htmlFor="mark">
          Marque :
          <input onChange={handleSelectMark} className="update-product--input" placeholder={product.mark} type="text" name="mark" id="mark" />
        </label>
        <label htmlFor="gender_id">
          Sexe
          <select className="update-product--select" defaultValue={product.gender} name="gender_id" id="gender_id" onChange={handleSelectGender}>
            <option value="">Choisir : </option>
            <option value="1">Homme</option>
            <option value="2">Femme</option>
            <option value="3">Enfant</option>
            <option value="4">Bébé</option>
          </select>
        </label>
        <label htmlFor="size">
          Taille
          <select className="update-product--select" defaultValue={product.size} name="size" id="size" onChange={handleSelectSize}>
            <option value="">Choisir :</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <label htmlFor="status">
          Etat du produit :
          <select className="update-product--select" defaultValue={product.state} name="status" id="status" onChange={handleSelectState}>
            <option value="">Choisir</option>
            <option value="Jamais porté">Jamais porté</option>
            <option value="Bon état">Bon état</option>
            <option value="Usé">Usé</option>
            <option value="Fin de vie">Fin de vie</option>
          </select>
        </label>
        <label htmlFor="description">
          Description :
          <input onChange={handleChangeDescription} placeholder={product.description} className="update-product--input" type="textarea" name="description" id="description" onChange={handleChangeName} />
        </label>
        <label htmlFor="price">
          Prix :
          <input className="update-product--input" placeholder={product.price} type="number" name="price" id="price" onChange={handleChangePrice} />
        </label>
        <label htmlFor="price">
          Image :
          <input className="update-product--input" multiple="multiple" placeholder={product.image ? product.image : null} type="file" name="image" id="image" onChange={handleChangeImage} />
        </label>
        <div className="update-product-submit">
          {/* <NavLink to="/products"> */}
          <input className="update-product-submit--input" type="submit" value="Modifier le produit" />
          {/* </NavLink> */}
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
