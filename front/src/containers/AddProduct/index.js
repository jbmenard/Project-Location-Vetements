import { connect } from 'react-redux';

import AddProduct from 'src/components/AddProduct';
import { createProduct, addProductInState } from 'src/actions/product';

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
  user: state.userReducer.user,
  sub_category_id: state.productReducer.sub_category_id,
  toggleRedirection: state.styleReducer.toggleRedirection,
  toggleNavbar: state.styleReducer.toggleNavbar,
  errorOnProduct: state.productReducer.errorOnProduct,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  createProduct: (userId) => {
    dispatch(createProduct(userId));
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
)(AddProduct);
