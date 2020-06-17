import axios from 'axios';

import { CREATE_PRODUCT } from 'src/actions/product';

const api = (state) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
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
    default:
      return state;
  }
};

export default api;
