import { CHANGE_VALUE_STATE_USER, CHANGE_VALUE_STATE_USER_INFORMATIONS, INFO_USER, LOG_USER } from 'src/actions/inscription';
import { SAVE_LOGOUT } from 'src/actions/user';



export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  user: {},
  userInfo: {},

  id: 10,
  first_name: '',
  last_name: '',
  address: '',
  mobile: '',
  avatar: '',
  app_user_id: 7,
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
    case SAVE_LOGOUT:
      return {
        ...state,
        logged: false,
      };
    case LOG_USER: {
      return {
        ...state,
        user: action.userData,
        logged: true,
      };
    }
    case INFO_USER: {
      return {
        ...state,
        userInfo: action.infoUser,
      }
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
