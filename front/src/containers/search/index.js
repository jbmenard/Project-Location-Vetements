import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { sendMessage, changeText } from 'src/actions/search'

const mapStateToProps = (state) => ({
  inputValue: state.text,
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
