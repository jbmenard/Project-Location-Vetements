import { connect } from 'react-redux';

import CardDesign from 'src/components/CardDesign';
import { updateProduct, deleteProduct } from 'src/actions/product';

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
  user_id: state.productReducer.user_id,
  sub_category_id: state.productReducer.sub_category_id,
});

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (id) => {
    console.log('Modifier produit');
    dispatch(updateProduct(id));
  },
  deleteProduct: (id) => {
    console.log('Supprimer produit');
    dispatch(deleteProduct(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDesign);
