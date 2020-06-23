import axios from 'axios';

import {
  CREATE_PRODUCT, FETCH_PRODUCTS, saveProducts, getError,
} from 'src/actions/product';
import { SEND_MESSAGE } from 'src/actions/search';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      const state = store.getState().productReducer;
      console.log('state', state);
      const data = new FormData();
      data.set('id', state.id);
      data.set('name', state.name);
      data.set('description', state.description);
      data.set('gender_id', state.gender_id);
      data.append('image', state.image);
      data.set('size', state.size);
      data.set('price', state.price);
      data.set('mark', state.mark);
      data.set('status', state.status);
      data.set('app_user_id', state.app_user_id);
      data.set('sub_category_id', state.sub_category_id);
      axios({
        method: 'post',
        url: 'http://localhost:5050/product',
        data,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }
    case FETCH_PRODUCTS: {
      const state = store.getState().productReducer;
      state.loading = false;

      axios.get('http://localhost:5050/product')
        .then((response) => {
          const saveProductsAction = saveProducts(response.data);
          store.dispatch(saveProductsAction);
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(getError());
        });
      break;
    }
    case SEND_MESSAGE: {
      console.log('message middleware');
      const state = store.getstate().userReducer;
      axios({
        method: 'get',
        url: `http://localhost:5050/${state.searchBar}`,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }
    default:
      next(action);
  }
};

export default api;
