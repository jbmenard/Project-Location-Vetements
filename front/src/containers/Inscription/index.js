import { connect } from 'react-redux';

import Inscription from 'src/components/Inscription';
import { createUser, changeValueStateUser } from 'src/actions/inscription';

const mapStateToProps = (state) => ({
  // id: state.createUserReducer.id,
  // password: state.createUserReducer.password,
  // email: state.creacteUserReducer.email,
});

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  createUser: (index, value) => {
    dispatch(createUser(index, value));
  },
  onChangeEmail: (value, name) => {
    const action = changeValueStateUser(value, name);
    dispatch(action);
  },
  onChangePassword: (value, name) => {
    const action = changeValueStateUser(value, name);
    dispatch(action);
    // console.log('Je suis aussi ici')
  },
  onChangeConfirmPassword: (value, name) => {
    const action = changeValueStateUser(value, name);
    dispatch(action);
    // console.log('Je encore là')
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inscription);
