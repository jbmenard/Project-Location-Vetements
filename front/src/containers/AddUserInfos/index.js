import { connect } from 'react-redux';

import AddUserInfos from 'src/components/AddUserInfos';
import { createUserInformations, changeValueStateUserInformations } from 'src/actions/inscription';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  createUserInformations: (event) => {
    event.preventDefault();
    dispatch(createUserInformations());
  },
  onChangeFirstName: (event) => {
    dispatch(changeValueStateUserInformations(event.target.value, event.target.name));
  },
  onChangeLastName: (event) => {
    dispatch(changeValueStateUserInformations(event.target.value, event.target.name));
  },
  onChangeAddress: (event) => {
    dispatch(changeValueStateUserInformations(event.target.value, event.target.name));
  },
  onChangeMobile: (event) => {
    dispatch(changeValueStateUserInformations(event.target.value, event.target.name));
  },
  onChangeCertified: (event) => {
    dispatch(changeValueStateUserInformations(event.target.value, event.target.name));
  },
  onChangeRole: (event) => {
    dispatch(changeValueStateUserInformations(event.target.value, event.target.name));
  },
  onChangeAvatar: (event) => {
    dispatch(changeValueStateUserInformations(event.target.files[0], event.target.name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserInfos);
