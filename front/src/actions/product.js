export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const ADD_PRODUCT_IN_STATE = 'ADD_PRODUCT_IN_STATE';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_ERROR = 'GET_ERROR';
export const SEND_FORM = 'SEND_FORM';
export const SAVE_FORM = 'SAVE_FORM';
export const CHANGE_INPUT_COMMENT_PRODUCT = 'CHANGE_INPUT_COMMENT_PRODUCT';
export const RESET_COMMENT_MSG = 'RESET_COMMENT_MSG';
export const GET_ERROR_ON_PRODUCT = 'GET_ERROR_ON_PRODUCT';

export const ResetCommentMsg = () => ({
  type: RESET_COMMENT_MSG,

});

export const createProduct = (userId) => ({
  type: CREATE_PRODUCT,
  userId,
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

export const sendForm = (productId) => ({
  type: SEND_FORM,
  productId,
});

export const saveForm = () => ({
  type: SAVE_FORM,
});

export const changeInputCommentProduct = (value) => ({
  type: CHANGE_INPUT_COMMENT_PRODUCT,
  value,
});

export const getErrorOnProduct = () => ({
  type: GET_ERROR_ON_PRODUCT,
});
