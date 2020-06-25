import { TOGGLE_NAVBAR, TOGGLE_REDIRECTION } from 'src/actions/style';

const initialState = {
  toggleNavbar: false,
  toggleRedirection: false,
};

const styleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        toggleNavbar: !state.toggleNavbar,
      };
    case TOGGLE_REDIRECTION: {
      return {
        ...state,
        toggleRedirection: true,
        toggleNavbar: !state.toggleNavbar,
      }
    }
    default:
      return state;
  }
};

export default styleReducer;
