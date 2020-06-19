import { SAVE_PRODUCTS, ADD_PRODUCT_IN_STATE, GET_ERROR } from 'src/actions/product';

export const initialState = {
  listProducts: [],
  id: 10,
  name: '',
  description: '',
  image: '',
  size: '',
  price: 0,
  mark: '',
  status: '',
  user_id: 3,
  sub_category_id: 2,
  gender_id: 1,
  loading: true,
  error: false,
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        listProducts: action.products,
        loading: false,

      };
    case ADD_PRODUCT_IN_STATE:
      console.log(action.value, action.name);

      return {
        ...state,
        [action.name]: action.value,
      };

    case GET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
