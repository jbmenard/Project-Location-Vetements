export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const ADD_PRODUCT_IN_STATE = 'ADD_PRODUCT_IN_STATE';
export const GET_ERROR = 'GET_ERROR';
export const SEND_FORM = 'SEND_FORM';
export const SAVE_FORM = 'SAVE_FORM';
export const CHANGE_INPUT_COMMENT_PRODUCT = 'CHANGE_INPUT_COMMENT_PRODUCT';

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

export const getError = () => ({
  type: GET_ERROR,
});

export const sendForm = () => ({
  type: SEND_FORM,
});

export const saveForm = () => ({
  type: SAVE_FORM,
});

export const changeInputCommentProduct = (value) => ({
  type: CHANGE_INPUT_COMMENT_PRODUCT,
  value,
});
