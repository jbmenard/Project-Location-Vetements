import {
  TOGGLE_INPUT,
  CHANGE_VALUE_STATE_USER,
  CHANGE_VALUE_STATE_USER_INFORMATIONS,
  CHANGE_AVATAR_IN_STATE,
  SAVE_USERS,
  INFO_USER,
  LOG_USER,
  HIDDEN_INPUT,
  LOGIN_ERROR,
  LOGIN_VALIDE,
} from 'src/actions/inscription';
import { CHANGE_SEARCH_BAR_VALUE, CLEAN_SEARCH_BAR, PRODUCT_NOT_FOUND_ACTION, PRODUCT_FOUND, } from 'src/actions/search';
import { SAVE_LOGOUT, COMMENTAIRE } from 'src/actions/user';

export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
  user: {},
  listUsers: [],

  

  // userInfo: {},

  id: 10,
  first_name: 'Prénom',
  last_name: '',
  address: '',
  mobile: '06********',
  avatar: '',
  app_user_id: '',
  logged: false,
  toggleInput: false,
  searchBar: '',
  commentMessage: false,
  isClick: false,
  toggleValidateButton: false,

  // Error
  errorPassword: false,
  errorPasswordLength: false,
  errorEmail: false,
  errorNotFoundProduct: false,
  errorNotFoundUser: false,

};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_STATE_USER: {
      if (action.name === 'confirmPassword' ) {
        if (state.password !== action.value || action.value === null) {
          return {
            ...state,
            [action.name]: action.value,
            errorPassword: true,
          };
        }
      }
      if (action.name === 'password') {
        if (action.value.length < 6 || action.value === null) {
          return {
            ...state,
            [action.name]: action.value,
            errorPasswordLength: true,
          };
        }
      }

      return {
        ...state,
        [action.name]: action.value,
        errorPassword: false,
        errorPasswordLength: false,

      };
    }
    case CHANGE_VALUE_STATE_USER_INFORMATIONS: {
      if (action.name === 'avatar') {
        return {
          ...state,
          avatar: action.value,
          toggleValidateButton: !state.toggleValidateButton,
        };
      }
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SAVE_USERS: {
      return {
        ...state,
        listUsers: action.listUsers,
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
    case HIDDEN_INPUT: { 2;
      return {
        ...state,
        toggleInput: false,
        userInfo: action.value,
        toggleValidateButton: false,
      };
    }
    case COMMENTAIRE: {
      return {
        ...state,
        commentMessage: !state.commentMessage,
        isClick: !state.isClick,

      };
    }
    case CLEAN_SEARCH_BAR: {
      return {
        ...state,
        searchBar: '',
      };
    }
    case PRODUCT_NOT_FOUND_ACTION: {
      return {
        ...state,
        errorNotFoundProduct: true,
      };
    }
    case PRODUCT_FOUND: {
      return {
        ...state,
        errorNotFoundProduct: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        errorNotFoundUser: true,
      };
    }
    case LOGIN_VALIDE: {
      return {
        ...state,
        errorNotFoundUser: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
