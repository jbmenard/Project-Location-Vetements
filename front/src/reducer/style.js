import { TOGGLE_NAVBAR } from 'src/actions/style';

const initialState = {
  toggleNavbar: false,
};

const styleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        toggleNavbar: !state.toggleNavbar,
      };
    default:
      return state;
  }
};

export default styleReducer;
