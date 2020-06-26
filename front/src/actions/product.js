export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const ADD_PRODUCT_IN_STATE = 'ADD_PRODUCT_IN_STATE';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_ERROR = 'GET_ERROR';

export const createProduct = () => ({
  type: CREATE_PRODUCT,
});

export const addProductInState = (value, name) => ({
  type: ADD_PRODUCT_IN_STATE,
  value,
  name,
});

export const updateProduct = (id) => ({
  type: UPDATE_PRODUCT,
  id,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const getError = () => ({
  type: GET_ERROR,
});
