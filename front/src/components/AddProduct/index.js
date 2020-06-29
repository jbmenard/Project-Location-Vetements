import React from 'react';
// import _ from 'lodash';
import Button from 'src/components/Button';
import './style.scss';
import Clothes from '../../assets/images/clothes.jpg';
import { Redirect } from 'react-router-dom';

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
  toggleRedirection,
  toggleNavbar,
  name,
  user,
}) => {
  const handleSubmit = (event, id) => {
    event.preventDefault();
    createProduct(id);
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
      <form className="add-product--form" onSubmit={(event) => handleSubmit(event, user.user.id)}>
        <label htmlFor="name">
          Nom du produit *
          <input className="add-product--input" placeholder="ex: Veste de ski" type="text" name="name" id="name" onChange={handleChangeName} />
        </label>
        <label htmlFor="sub_category_id">
          Catégories
          <select className="form-control" name="sub_category_id" id="sub_category_id" selected="1" onChange={(event) => handleSelectSubCategory(event)}>
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
          Marque
          <input onChange={handleSelectMark} placeholder="ex: Nike" className="add-product--input" type="text" name="mark" id="mark" />
        </label>
        <label htmlFor="gender_id">
          Sexe
          <select className="form-control" name="gender_id" id="gender_id" onChange={(event) => handleSelectGender(event)}>
            <option value="">Choisir : </option>
            <option value="1">Homme</option>
            <option value="2">Femme</option>
            <option value="3">Enfant</option>
            <option value="4">Bébé</option>
          </select>
        </label>
        <label htmlFor="size">
          Taille *
          <select className="form-control" name="size" id="size" defaultChecked="xsmall" onChange={(event) => handleSelectSize(event)}>
            <option value="">Choisir :</option>
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
          Etat du produit *
          <select className="form-control" name="status" id="status" defaultChecked="neverUsed" onChange={(event) => handleSelectState(event)}>
            <option value="">Choisir</option>
            <option value="neverUsed">Jamais porté</option>
            <option value="likeNew">Comme neuf</option>
            <option value="used">Usé</option>
            <option value="toGive">A donner</option>

          </select>

        </label>
        <label htmlFor="description">
          Description *
          <input onChange={handleChangeDescription} placeholder="Informations complémentaires" className="add-product--input" type="textarea" name="description" id="description" />
        </label>
        <label htmlFor="price">
          Prix *
          <input className="add-product--input" placeholder="Minimum 1 €" min={1} type="number" name="price" id="price" onChange={handleChangePrice} />
        </label>
        <label htmlFor="price">
          Image :
          <input className="form-control-file" multiple="multiple" type="file" name="image" id="image" onChange={handleChangeImage} />
        </label>
        <div className="add-product-submit">
          <div className="form-button">
            <Button type="submit" size="x-large" value="Creer un produit" color="form" />

          </div>
        </div>
      </form>
      {toggleRedirection
      && <Redirect to={`/user/${user.user.id}`} />}
    </div>
  );
};

export default AddProduct;
