/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByName = (name) => {
  // Pour pouvoir supprimer les caractères spéciaux
  // on passe par une valeur intermédiaire de title
  // et on supprime ces caractères via replace()
  const modifiedName = name.replace(/['&@]/g, '').replace(/[_]/g, '-');

  return slugify(modifiedName, {
    lower: true,
    // on aurait bien voulu passer par les options de slugify
    // pour supprimer les caractères spéciaux
    // MAIS ils ne sont pas tous pris en compte
    // remove: /['&@]/g,
  });
};

export const getUrlByName = (name) => {
  return `/product/${getSlugByName(name)}`;
};

export const getUpdateUrlByName = (name) => {
  return `/update/${getSlugByName(name)}`;
};

export const getRecipeBySlug = (state, slug) => {
  return state.productReducer.listProducts.find((product) => {
    return getSlugByName(product.name) === slug;
  });
};
