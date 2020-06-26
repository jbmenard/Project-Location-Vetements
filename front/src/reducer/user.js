import {
  TOGGLE_INPUT,
  CHANGE_VALUE_STATE_USER,
  CHANGE_VALUE_STATE_USER_INFORMATIONS,
  CHANGE_AVATAR_IN_STATE,
  INFO_USER,
  LOG_USER,
  HIDDEN_INPUT,
} from 'src/actions/inscription';
import { CHANGE_SEARCH_BAR_VALUE, CLEAN_SEARCH_BAR } from 'src/actions/search';
import { SAVE_LOGOUT, COMMENTAIRE } from 'src/actions/user';

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
  commentMessage: false,
  isClick: false,
  toggleValidateButton: false,

};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_STATE_USER: {
      return {
        ...state,
        [action.name]: action.value,
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
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
