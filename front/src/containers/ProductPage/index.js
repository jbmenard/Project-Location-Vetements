import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProductCategory from 'src/components/ProductPage';
import { getRecipeBySlug } from 'src/selectors/product';

const mapStateToProps = (state, ownProps) => ({
  product: getRecipeBySlug(state, ownProps.match.params.slug),

});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({});

const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCategory);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
