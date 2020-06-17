import axios from 'axios';

import { CREATE_PRODUCT, FETCH_PRODUCTS, saveProducts } from 'src/actions/product';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      const state = store.getState();
      axios.post('http://localhost:5050/product', {
        name: state.product.name,
        description: state.product.description,
        gender_id: state.product.gender,
        image: state.product.image,
        price: state.product.price,
        size: state.product.size,
        mark: state.product.mark,
        user_id: state.product.userID,
        sub_category_id: state.product.subCategoryID,
      })
        .then((response) => {
          console.log(response);
        })
        .cacth((error) => {
          console.trace(error);
        });
      next(action);
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
