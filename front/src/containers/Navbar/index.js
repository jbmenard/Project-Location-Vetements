import { connect } from 'react-redux';

import Navbar from 'src/components/Navbar';

const mapStateToProps = (state) => ({
  toggleMenu: state.styleReducer.toggleNavbar,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: (event) => {
    console.log('Je suis ici');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
