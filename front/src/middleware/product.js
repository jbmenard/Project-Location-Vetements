import axios from 'axios';

import { CREATE_PRODUCT, FETCH_PRODUCTS, saveProducts } from 'src/actions/product';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      const state = store.getState().productReducer;
      // console.log(state);
      const data = new FormData();
      data.set('id', state.id);
      data.set('name', state.name);
      data.set('description', state.description);
      data.set('gender_id', state.gender_id);
      data.set('size', state.size);
      data.set('price', state.price);
      data.set('mark', state.mark);
      data.set('status', state.status);
      data.set('user_id', state.user_id);
      data.set('sub_category_id', state.sub_category_id);
      axios({
        method: 'post',
        url: 'http://localhost:5050/product',
        data: data,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.trace(error);
        });
      break;
    }
    case FETCH_PRODUCTS:
      axios.get('http://localhost:5050/product')
        .then((response) => {
          const saveProductsAction = saveProducts(response.data);
          store.dispatch(saveProductsAction);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      next(action);
  }
};

export default api;
