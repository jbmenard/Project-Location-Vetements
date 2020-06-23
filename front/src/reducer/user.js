import { CHANGE_VALUE_STATE_USER, CHANGE_VALUE_STATE_USER_INFORMATIONS, LOG_USER } from 'src/actions/inscription';
import { LOGOUT } from 'src/actions/user';



export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  appUser: {},

  id: 10,
  first_name: '',
  last_name: '',
  address: '',
  mobile: '',
  avatar: '',
  app_user_id: 5,
  logged: false,
  toggleInformation: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_STATE_USER: {
      console.log(action.value);
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
    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        logged: false,
      };
    case LOG_USER: {
      return {
        ...state,
        appUser: action.userData,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
