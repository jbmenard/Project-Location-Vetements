import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './style.scss';

const Search = ({
  send, errorToggle, inputValue, changeSearchValue, toggleRedirection, toggleNavbar,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };

  const handleChange = (event) => {
    changeSearchValue(event.target.value);
  };

  return (
    <>
      {errorToggle
    && <p className="not-found-message">Aucun résultat</p>}
      <form onSubmit={handleSubmit}>
        {/* <label className="item--title" htmlFor="search">
          <span className="search"> Rechercher</span>  */}
        <div className="container-search">
          <i className="fa fa-search" aria-hidden="true" />
          <input onChange={handleChange} value={inputValue} className="item--input" name="search" id="search" type="search" placeholder="Votre recherche" />
        </div>
        {/* </label> */}
      </form>
      {toggleRedirection && toggleNavbar
      && <Redirect to="/products" />}

    </>
  );
};

Search.propTypes = {
  send: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
};
export default Search;
