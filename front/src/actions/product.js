export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const createProduct = () => ({
  type: CREATE_PRODUCT,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});
