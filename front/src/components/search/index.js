import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Search = ({ send, inputValue, changeText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };

  const handleChange = (event) => {
    changeText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="item--title" htmlFor="search">
        <span className="search"> Rechercher</span> 
        <input onChange={handleChange} value={inputValue} className="item--input" name="search" id="search" type="search" placeholder="Votre recherche" />
      </label>
    </form>
  );
};

Search.propTypes = {
  send: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
};
export default Search;
