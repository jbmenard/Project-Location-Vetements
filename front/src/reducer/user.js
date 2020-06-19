import { CREATE_USER, CHANGE_VALUE_STATE_USER } from 'src/actions/inscription';

export const initialState = {
  password: '',
  email: '',
  confirmPassword: '',
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
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
