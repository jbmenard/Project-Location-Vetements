import { connect } from 'react-redux';

import Navbar from 'src/components/Navbar';
import { toggleNavbar } from 'src/actions/style';

const mapStateToProps = (state) => ({
  toggleMenu: state.styleReducer.toggleNavbar,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: (event) => {
    dispatch(toggleNavbar());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
