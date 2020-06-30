import { connect } from 'react-redux';

import Navbar from 'src/components/Navbar';
import { toggleNavbar } from 'src/actions/style';
import { logout } from 'src/actions/user';
import { changeValueStateUser, connectUser } from 'src/actions/inscription';

const mapStateToProps = (state) => ({
  toggleMenu: state.styleReducer.toggleNavbar,
  errorNotFoundProduct: state.userReducer.errorNotFoundProduct,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: (event) => {
    dispatch(toggleNavbar());
  },
  handleLogout: () => {
    dispatch(logout());
  },

  connectUser: (event) => {
    event.preventDefault();
    dispatch(connectUser());
  },

  changeValueEmail: (event) => {
    dispatch(changeValueStateUser(event.target.value, event.target.name));
  },

  changeValuePassword: (event) => {
    dispatch(changeValueStateUser(event.target.value, event.target.name));
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
