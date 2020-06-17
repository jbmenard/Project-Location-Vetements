import { connect } from 'react-redux';

import ProductForm from 'src/components/ProductForm';
import { createProduct } from 'src/actions/product';

const mapStateToProps = (state) => ({});

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
)(ProductForm);
