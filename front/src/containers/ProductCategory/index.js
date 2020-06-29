import { connect } from 'react-redux';

import ProductCategory from 'src/components/productCategory';


const mapStateToProps = (state) => ({
  listProducts: state.productReducer.listProducts,
  loading: state.productReducer.loading,
  error: state.productReducer.error,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCategory);
