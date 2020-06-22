import { CREATE_USER, CHANGE_VALUE_STATE_USER } from 'src/actions/inscription';
import { LOGOUT } from 'src/actions/user';

export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  logged: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_USER:
      console.log("non");
      break;
    case CHANGE_VALUE_STATE_USER: {
      console.log(action.name, action.value);
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        logged: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
