import React from 'react';
// import _ from 'lodash';
import Button from 'src/components/Button';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Clothes from '../../assets/images/clothes.jpg';

const AddProduct = ({
  createProduct,
  onChangeName,
  onSelectGender,
  onChangePrice,
  onSelectorSize,
  onSelectorState,
  onSelectSubCategory,
  onSelectMark,
  onChangeDescription,
  onChangeImage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
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
  return (
    <div className="add-product">
      <h1 className="add-product--title">Ajouter un produit</h1>
      <div className="container-form-image">
        <form className="add-product--form" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="name">
            Nom du produit :
            <input className="add-product--input" type="text" name="name" id="name" onChange={handleChangeName} />
          </label>
          <label htmlFor="sub_category_id">
            Catégorie :
            {/* <select className="add-product--select" name="sub_category_id" id="sub_category_id" onChange={handleSelectSubCategory}>
            <option value="0">Sports de Glisse</option>
            <option value="7">Soirées et Fêtes</option>
            <option value="6">Mariages</option>
            <option value="11">Maroquinerie</option>
          </select> */}
            <select className="form-control" name="sub_category_id" id="sub_category_id" onChange={handleSelectSubCategory}>
              <option value="0">Sports de Glisse</option>
              <option value="7">Soirées et Fêtes</option>
              <option value="6">Mariages</option>
              <option value="11">Maroquinerie</option>
            </select>
          </label>
          <label htmlFor="mark">
            Marque :
            <input onChange={handleSelectMark} className="add-product--input" type="text" name="mark" id="mark" />
          </label>
          <label htmlFor="gender_id">
            Genre
            {/* <select className="add-product--select" name="gender_id" id="gender_id" onChange={handleSelectGender}>
            <option value="0">Homme</option>
            <option value="2">Femme</option>
            <option value="3">Enfant</option>
            <option value="4">Bébé</option>
          </select> */}
            <select className="form-control" name="gender_id" id="gender_id" onChange={handleSelectGender}>
              <option value="0">Homme</option>
              <option value="2">Femme</option>
              <option value="3">Enfant</option>
              <option value="4">Bébé</option>
            </select>

          </label>
          <label htmlFor="size">
            Taille
            {/* <select className="add-product--select" name="size" id="size" onChange={handleSelectSize}>
            <option value="xsmall">XS</option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xlarge">XL</option>
            <option value="2xlarge">XXL</option>
            <option value="3xlarge">3XL</option>
          </select> */}
            <select className="form-control" name="size" id="size" onChange={handleSelectSize}>
              <option value="xsmall">XS</option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="xlarge">XL</option>
              <option value="2xlarge">XXL</option>
              <option value="3xlarge">3XL</option>
            </select>
          </label>
          <label htmlFor="status">
            Etat du produit :
            {/* <select className="add-product--select" name="status" id="status" onChange={handleSelectState}>
            <option value="neverUsed">Jamais porté</option>
            <option value="likeNew">Comme neuf</option>
            <option value="used">Usé</option>
            <option value="toGive">A donner</option>
          </select> */}
            <select className="form-control" name="status" id="status" onChange={handleSelectState}>

              <option value="neverUsed">Jamais porté</option>
              <option value="likeNew">Comme neuf</option>
              <option value="used">Usé</option>
              <option value="toGive">A donner</option>

            </select>

          </label>
          <label htmlFor="description">
            Description
            <input onChange={handleChangeDescription} className="add-product--input" type="textarea" name="description" id="description" onChange={handleChangeName} />
          </label>
          <label htmlFor="price">
            Prix :
            <input className="add-product--input" type="number" name="price" id="price" onChange={handleChangePrice} />
          </label>
          <label htmlFor="price">
            Image :
            {/* <input className="add-product--input" multiple="multiple" type="file" name="image" id="image" onChange={handleChangeImage} /> */}
            <input className="form-control-file" multiple="multiple" type="file" name="image" id="image" onChange={handleChangeImage} />
          </label>
          <div className="add-product-submit">
            {/* <NavLink to="/products"> */}
            {/* <input className="add-product-submit--input" type="submit" value="Créer produit" /> */}
            <div className="form-button">
              <Button type="submit" size="x-large" value="Creer un produit" color="form" />

            </div>
            {/* </NavLink> */}
          </div>
        </form>
        <div className="wrapper-image">
          <img className="img-clothes" src={Clothes} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
