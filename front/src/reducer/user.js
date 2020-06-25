import {
  TOGGLE_INPUT,
  CHANGE_VALUE_STATE_USER,
  CHANGE_VALUE_STATE_USER_INFORMATIONS,
  INFO_USER,
  LOG_USER,
  HIDDEN_INPUT,
} from 'src/actions/inscription';
import { SAVE_LOGOUT } from 'src/actions/user';
import { CHANGE_SEARCH_BAR_VALUE, } from 'src/actions/search';


export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  user: {},
  // userInfo: {},

  id: 10,
  first_name: 'Prénom',
  last_name: '',
  address: '',
  mobile: '06********',
  avatar: '',
  app_user_id: 7,
  logged: false,
  toggleInput: false,
  searchBar: '',
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
    case CHANGE_SEARCH_BAR_VALUE: {
      return {
        ...state,
        searchBar: action.value,
      };
    }
    case LOG_USER: {
      console.log(action.userData);
      
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
      };
    }
    case TOGGLE_INPUT: {
      return {
        ...state,
        toggleInput: true,
      };
    }
    case HIDDEN_INPUT: {
      // console.log((action.value));
      return {
        ...state,
        toggleInput: false,
        userInfo: action.value,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
