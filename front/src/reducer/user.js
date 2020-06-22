import { CREATE_USER, CHANGE_VALUE_STATE_USER, CHANGE_VALUE_STATE_USER_INFORMATIONS } from 'src/actions/inscription';
import { LOGOUT } from 'src/actions/user';



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
  logged: false,
  toggleInformation: false,
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
