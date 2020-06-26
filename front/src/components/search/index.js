import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Search = ({ send, inputValue, changeSearchValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };

  const handleChange = (event) => {
    changeSearchValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label className="item--title" htmlFor="search">
        <span className="search"> Rechercher</span>  */}
        <div className="container-search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input onChange={handleChange} value={inputValue} className="item--input" name="search" id="search" type="search" placeholder="Votre recherche" />
        </div>
      {/* </label> */}
    </form>
  );
};

Search.propTypes = {
  send: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
};
export default Search;
