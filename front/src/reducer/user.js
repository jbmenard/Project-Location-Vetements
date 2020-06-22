import { CREATE_USER, CHANGE_VALUE_STATE_USER, CHANGE_VALUE_STATE_USER_INFORMATIONS } from 'src/actions/inscription';

export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  first_name: '',
  last_name: '',
  address: '',
  mobile: '',
  avatar: '',
  app_user_id: 1,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_USER:
      console.log("non");
      break;
    case CHANGE_VALUE_STATE_USER: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case CHANGE_VALUE_STATE_USER_INFORMATIONS: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
