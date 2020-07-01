import { connect } from 'react-redux';
import UserPage from 'src/components/UserPage';
import { toggleInput, changeAvatarInState, changeValueStateUserInformations, updateAvatar, updateFirstName, updateMobile } from 'src/actions/inscription'; 

const mapStateToProps = (state) => ({
  toggleInput: state.userReducer.toggleInput,
  toggleValidateButton: state.userReducer.toggleValidateButton,
  firstName: state.userReducer.first_name,
  mobile: state.userReducer.mobile,
  userInfo: state.userReducer.userInfo,
  user: state.userReducer.user,
  isLogged: state.userReducer.logged,
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

  updateAvatar: (event) => {
    event.preventDefault();
    dispatch(updateAvatar())
  },

  activeInputFirstName: (e) => {
    console.log('oui')
    dispatch(toggleInput());
  },

  activeInputMobile: (e) => {
    dispatch(toggleInput());
  },

  onChangeAvatarInState: (event) => {
    dispatch(changeValueStateUserInformations(event.target.files[0], event.target.name));
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
