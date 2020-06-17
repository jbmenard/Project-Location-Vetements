import { SAVE_PRODUCTS } from 'src/actions/product';

export const initialState = {
  listProducts: [],
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        listProducts: action.products,
      };
    default:
      return state;
  }
};

export default productReducer;
