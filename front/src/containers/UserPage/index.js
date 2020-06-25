import { connect } from 'react-redux';
import UserPage from 'src/components/UserPage';
import { toggleInput, changeValueStateUserInformations, updateFirstName, updateMobile } from 'src/actions/inscription';

const mapStateToProps = (state) => ({
  toggleInput: state.userReducer.toggleInput,
  firstName: state.userReducer.first_name,
  mobile: state.userReducer.mobile,
  userInfo: state.userReducer.userInfo,
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateFirstName: (event) => {
    event.preventDefault();
    dispatch(updateFirstName());
  },

  updateMobile: (event) => {
    event.preventDefault();
    dispatch(updateMobile())
  },

  activeInputFirstName: (e) => {
    console.log('oui')
    dispatch(toggleInput());
  },

  activeInputMobile: (e) => {
    dispatch(toggleInput());
  },

  onChangeFirstName: (event) => {
    const action = changeValueStateUserInformations(event.target.value, event.target.name);
    dispatch(action);
  },

  onChangeMobile: (event) => {
    const action = changeValueStateUserInformations(event.target.value, event.target.name);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPage);
