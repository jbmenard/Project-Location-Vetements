import { SAVE_PRODUCTS, ADD_PRODUCT_IN_STATE } from 'src/actions/product';

export const initialState = {
  listProducts: [],
  id: 31,
  name: '',
  description: '',
  image: '',
  size: '',
  price: 0,
  mark: '',
  status: '',
  app_user_id: 3,
  sub_category_id: 2,
  gender_id: 1,
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        listProducts: action.products,
      };
    case ADD_PRODUCT_IN_STATE:
      console.log(action.value, action.name);
      
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default productReducer;
