import axios from 'axios';

import { CREATE_USER } from 'src/actions/inscription';



const apiUser = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState().UserCreateReducer;
      // console.log(state);
      const data = new FormData();
      data.set('id', state.id);
      data.set('password', state.password);
      data.set('email', state.email);
      axios({
        method: 'post',
        url: 'http://localhost:5050/inscription',
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
    
    default:
      next(action);
  }
};

export default apiUser;
