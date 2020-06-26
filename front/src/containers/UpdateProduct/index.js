import { connect } from 'react-redux';

import UpdateProduct from 'src/components/UpdateProduct';
import { updateProduct, addProductInState } from 'src/actions/product';

const mapStateToProps = (state) => ({
  id: state.productReducer.id,
  name: state.productReducer.name,
  description: state.productReducer.description,
  gender_id: state.productReducer.gender_id,
  image: state.productReducer.image,
  size: state.productReducer.size,
  price: state.productReducer.price,
  mark: state.productReducer.mark,
  status: state.productReducer.status,
  sub_category_id: state.productReducer.sub_category_id,
});

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (id) => {
    dispatch(updateProduct(id));
  },
  onChangeName: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onSelectGender: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onSelectorSize: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onSelectorState: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onChangePrice: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onSelectSubCategory: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onSelectMark: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onChangeDescription: (value, name) => {
    dispatch(addProductInState(value, name));
  },
  onChangeImage: (value, name) => {
    dispatch(addProductInState(value, name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateProduct);
