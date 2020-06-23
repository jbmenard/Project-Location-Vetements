import { connect } from 'react-redux';
import Search from 'src/components/search';
import { sendMessage, changeText } from 'src/actions/search'

const mapStateToProps = (state) => ({
  inputValue: state.userReducer.searchBar,
});

const mapDispatchToProps = (dispatch) => ({
  send: () => {
    const action = sendMessage();
    dispatch(action);
  },

  changeText: (value) => {
    const action = changeText(value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
