import axios from 'axios';

import {
  CREATE_PRODUCT, FETCH_PRODUCTS, saveProducts, getError,
  UPDATE_PRODUCT, DELETE_PRODUCT, SAVE_PRODUCTS, fetchProducts, SEND_FORM,
} from 'src/actions/product';
import { SEND_MESSAGE, cleanSearchBar, productNotFoundAction, productFound } from 'src/actions/search';
import { toggleRedirection } from 'src/actions/style';


const api = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      const state = store.getState().productReducer;
      const data = new FormData();
      data.set('name', state.name);
      data.set('description', state.description);
      data.set('gender_id', state.gender_id);
      data.set('image', state.image);
      data.set('size', state.size);
      data.set('price', state.price);
      data.set('mark', state.mark);
      data.set('status', state.status);
      data.set('app_user_id', action.userId);
      data.set('sub_category_id', state.sub_category_id);
      console.log('state', state.image);
      axios({
        method: 'post',
        url: 'http://localhost:5050/product',
        data,
      })
        .then((response) => {
          store.dispatch(saveProducts(response.data));
          store.dispatch(toggleRedirection());
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }
    case FETCH_PRODUCTS: {
      const state = store.getState().productReducer;
      state.loading = false;

      axios.get('http://localhost:5050/product/name/slip')
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
    case UPDATE_PRODUCT: {
      const state = store.getState().productReducer;
      const data = new FormData();
      data.set('name', state.name);
      data.set('description', state.description);
      data.set('gender_id', state.gender_id);
      data.set('image', state.image);
      data.set('size', state.size);
      data.set('price', state.price);
      data.set('mark', state.mark);
      data.set('status', state.status);
      data.set('sub_category_id', state.sub_category_id);
      axios({
        method: 'patch',
        url: `http://localhost:5050/product/${action.id}`,
        data,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(fetchProducts());
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }

    case DELETE_PRODUCT: {
      axios({
        method: 'delete',
        url: `http://localhost:5050/product/${action.id}`,
      }, {
        withCredentials: true,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.trace(err);
        });
      break;
    }

    case SEND_MESSAGE: {
      const state = store.getState().userReducer;
      axios({
        method: 'get',
        url: `http://localhost:5050/product/name/${state.searchBar}`,
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveProducts(response.data));
          store.dispatch(toggleRedirection());
          store.dispatch(cleanSearchBar());
          store.dispatch(productFound());

        })
        .catch((err) => {
          store.dispatch(productNotFoundAction());
          console.trace(err);
        });
      break;
    }
    case SEND_FORM: {
      const state = store.getState().productReducer;
      const stateUser = store.getState().userReducer;
      console.log(action.productId);
      
      const data = new FormData();
      data.set('content', state.content);
      data.set('app_user_id', stateUser.user.user.id);
      data.set('product_id', action.productId);
      axios({
        method: 'post',
        url: 'http://localhost:5050/comment',
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
    default:
      next(action);
  }
};

export default api;
