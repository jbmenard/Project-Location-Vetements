import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import UpdateProduct from 'src/components/UpdateProduct';
import { updateProduct, addProductInState } from 'src/actions/product';
import { toggleRedirectionUpdate } from 'src/actions/style';
import { getRecipeBySlug } from 'src/selectors/product';

const mapStateToProps = (state, ownProps) => (console.log("ownprops", ownProps),{
  product: getRecipeBySlug(state, ownProps.match.params.slug),
  user: state.userReducer.user,
  toggleRedirectionUpdate: state.styleReducer.toggleRedirectionUpdate,
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


const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateProduct);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
