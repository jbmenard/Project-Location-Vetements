import { connect } from 'react-redux';

import App from 'src/components/App';
import { fetchProducts } from 'src/actions/product';
import { check, fetchUsers } from 'src/actions/inscription';

const mapStateToProps = (state) => ({
  // oneUser: state.userReducer.email,
  user: state.userReducer.user,
  infoUser: state.userReducer.userInfo,
  listUsers: state.userReducer.listUsers,
  isLoggin: state.userReducer.logged,
  listCard: state.productReducer.listProducts,
  loading: state.productReducer.loading,
  error: state.productReducer.error,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    const action = fetchProducts();
    dispatch(action);
  },

  fetchUsers: () => {
    const action = fetchUsers();
    dispatch(action);
  },

  checkIsLogged: () => {
    dispatch(check());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
