import { TOGGLE_NAVBAR, TOGGLE_REDIRECTION, TOGGLE_REDIRECTION_UPDATE } from 'src/actions/style';

const initialState = {
  toggleNavbar: false,
  toggleRedirection: false,
  toggleRedirectionUpdate: false,
};

const styleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        toggleNavbar: !state.toggleNavbar,
      };
    case TOGGLE_REDIRECTION: {
      if (state.toggleNavbar === true) {
        return {
          ...state,
          toggleRedirection: true,
          toggleNavbar: !state.toggleNavbar,
        };
      }
      return {
        ...state,
        toggleRedirection: true,
      }
    }
    case TOGGLE_REDIRECTION_UPDATE:
      return {
        ...state,
        toggleRedirectionUpdate: !state.toggleRedirectionUpdate,
      };
    default:
      return state;
  }
};

export default styleReducer;
