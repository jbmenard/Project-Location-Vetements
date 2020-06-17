export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const ADD_PRODUCT_IN_STATE = 'ADD_PRODUCT_IN_STATE';

export const createProduct = () => ({
  type: CREATE_PRODUCT,
});

export const addProductInState = (value, name) => ({
  type: ADD_PRODUCT_IN_STATE,
  value,
  name,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});
