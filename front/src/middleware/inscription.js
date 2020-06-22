import axios from 'axios';

import { CREATE_USER_INFORMATIONS, CREATE_USER } from 'src/actions/inscription';

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
    case CREATE_USER_INFORMATIONS: {
      const state = store.getState().userReducer;
      const data = new FormData();
      data.set('first_name', state.first_name);
      data.set('last_name', state.last_name);
      data.set('address', state.address);
      data.set('mobile', state.mobile);
      data.set('certified', state.certified);
      data.set('role', state.role);
      data.set('avatar', state.avatar);
      data.set('app_user_id', state.app_user_id);

      axios({
        method: 'post',
        url: 'http://localhost:5050/userinfo',
        data,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.trace(error);
        });
    }
      break;
    default:
      next(action);
  }
};

export default apiUser;
