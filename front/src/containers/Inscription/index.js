import { connect } from 'react-redux';

import Inscription from 'src/components/Inscription';
import { createUser, changeValueStateUser } from 'src/actions/inscription';

const mapStateToProps = (state) => ({
  
  email: state.userReducer.email,
  password: state.userReducer.password,
  confirmPassword: state.userReducer.confirmPassword,
})
console.log('je suis ici 1');

// grâce à mDTP je fourni une fonction au composant capable de dispatcher une action, émettre une intention
const mapDispatchToProps = (dispatch) => ({
  createUser: () => {
    console.log('je suis ici 2')
    dispatch(createUser());
  },
  onChangeEmail: (value, name) => {
    const action = changeValueStateUser(value, name);
    dispatch(action);
  },
  onChangePassword: (value, name) => {
    const action = changeValueStateUser(value, name);
    dispatch(action);
    
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
