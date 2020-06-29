import axios from 'axios';
import {
  CREATE_USER,
  CREATE_USER_INFORMATIONS,
  CONNECT_USER,
  FETCH_USERS,
  fetchUsers,
  logUser,
  CHECK,
  infoUser,
  UPDATE_FIRST_NAME,
  UPDATE_MOBILE,
  UPDATE_AVATAR,
  hiddenInput,
  check,
  saveUsers,

} from 'src/actions/inscription';
import { LOGOUT, saveLogout } from 'src/actions/user';
import { toggleRedirection } from 'src/actions/style';

axios.defaults.withCredentials = true;

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
          store.dispatch(toggleRedirection());
        })
        .catch((error) => {
          console.trace(error);
        });
      break;
    }
    case FETCH_USERS: {
      axios.get('http://localhost:5050/user')
        .then((response) => {
          store.dispatch(saveUsers(response.data));
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(getError());
        });
      break;
    }
    case CREATE_USER_INFORMATIONS: {
      const state = store.getState().userReducer;
      console.log(state);
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
          store.dispatch(infoUser(response.data));
        })
        .catch((error) => {
          console.trace(error);
        });
      break;
    }
    case CONNECT_USER: {
      const state = store.getState().userReducer;
      const data = new FormData();
      data.set('email', state.email);
      data.set('password', state.password);
      axios({
        method: 'post',
        url: 'http://localhost:5050/signin',
        data,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('response: ', response);
          store.dispatch(logUser(response.data));
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }
    case LOGOUT:
      axios.get('http://localhost:5050/logout', {

      })
        .then((response) => {
          console.log('vous êtes déconnecté');
          store.dispatch(saveLogout());
        });
      break;
    case CHECK:
      axios.post('http://localhost:5050/islogged', {}, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(logUser(response.data));
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    case UPDATE_FIRST_NAME: {
      const state = store.getState().userReducer;
      // console.log(state.user.data.AppUserInfo.id);
      const data = new FormData();
      data.set('first_name', state.first_name);
      axios({
        method: 'patch',
        url: `http://localhost:5050/userinfo/${state.user.user.AppUserInfo.id}`,
        data,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(hiddenInput(response.data));
          console.log(response.data);
          store.dispatch(fetchUsers());
        })
        .catch((err) => {
          console.log('je suis une erreur');

          console.trace(err);
        });
      break;
    }
    case UPDATE_MOBILE: {
      const state = store.getState().userReducer;
      // console.log(state.user.data.AppUserInfo.id);
      const data = new FormData();
      data.set('mobile', state.mobile);
      axios({
        method: 'patch',
        url: `http://localhost:5050/userinfo/${state.user.user.AppUserInfo.id}`,
        data,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log('je suis dans le middleware', response.data);

          store.dispatch(hiddenInput(response.data));
          store.dispatch(fetchUsers());

        })
        .catch((err) => {
          console.log('je suis une erreur');

          console.trace(err);
        });
      break;
    }
    case UPDATE_AVATAR: {
      const state = store.getState().userReducer;
      const data = new FormData();
      data.set('avatar', state.avatar);
      axios({
        method: 'patch',
        url: `http://localhost:5050/userinfo/${state.user.user.AppUserInfo.id}`,
        data,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          // console.log('je suis dans le middleware', response.data);
          store.dispatch(hiddenInput(response.data));
          store.dispatch(fetchUsers());

        })
        .catch((err) => {
          console.log('je suis une erreur');

          console.trace(err);
        });
      break;
    }
    default:
      next(action);
  }
};

export default apiUser;
