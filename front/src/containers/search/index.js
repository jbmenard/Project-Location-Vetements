import { connect } from 'react-redux';
import Search from 'src/components/search';
import { sendMessage, changeSearchValue } from 'src/actions/search'

const mapStateToProps = (state) => ({
  inputValue: state.userReducer.searchBar,
});

const mapDispatchToProps = (dispatch) => ({
  send: () => {
    const action = sendMessage();
    dispatch(action);
  },

  changeSearchValue: (value) => {
    const action = changeSearchValue(value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
