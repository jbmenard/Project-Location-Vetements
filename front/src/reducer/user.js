import { CREATE_USER, CHANGE_VALUE_STATE_USER } from 'src/actions/inscription';
import { LOGOUT, TOGGLE_INFORMATION } from 'src/actions/user';
import { SAVE_LOGOUT } from '../actions/user';

export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  logged: false,
  toggleInformation: false,
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
    case SAVE_LOGOUT:
      return {
        ...state,
      };
    case TOGGLE_INFORMATION:
      return {
        ...state,
        toggleInformation: !state.toggleInformation,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
