import { connect } from 'react-redux';

import AddProduct from 'src/components/AddProduct';
import { createProduct } from 'src/actions/product';

const mapStateToProps = (state) => ({
  listProducts: state.product.listProducts,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  createProduct: (event) => {
    console.log(event.target);
  },
  onChangeName: (event) => {
    console.log(event);
  },

  onSelectGender: (event) => {
    console.log(event);
  },

  onSelectorSize: (event) => {
    console.log(event);
  },

  onSelectorState: (event) => {
    console.log(event);
  },

  onChangePrice: (event) => {
    console.log(event);
  },

  onSelectSubCategory: (event) => {
    console.log(event);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct);