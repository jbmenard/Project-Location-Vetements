import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { toggleNavbar } from 'src/actions/style';

const mapStateToProps = (state) => ({
  toggleMenu: state.styleReducer.toggleNavbar,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => {
    const action = toggleNavbar();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
