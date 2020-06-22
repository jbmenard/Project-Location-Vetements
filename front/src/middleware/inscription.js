import axios from 'axios';

import { CREATE_USER } from 'src/actions/inscription';
import { LOGOUT, saveLogout } from 'src/actions/user';

const apiUser = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState().userReducer;
      console.log(state);
      const data = new FormData();
      data.set('email', state.email);
      data.set('password', state.password);
      data.set('passwordConfirm', state.confirmPassword);

      axios({
        method: 'post',
        url: 'http://localhost:5050/user',
        data,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.trace(error);
        });
      break;
    }
    case LOGOUT:
      axios.get('http://localhost:5050/logout', {

      })
        .then((response) => {
          console.log('vous êtes déconnecté');
          const saveLogoutAction = saveLogout(response.data);
          store.dispatch(saveLogoutAction);
        });
      break;
    default:
      next(action);
  }
};

export default apiUser;
