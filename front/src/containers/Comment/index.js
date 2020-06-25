import { connect } from 'react-redux';
import Comment from 'src/components/Comment';
import { commentaire } from  'src/actions/user';

const mapStateToProps = (state) => ({
  commentMessage: state.userReducer.commentMessage,
  isClick: state.userReducer.isClick,
});
const mapDispatchToProps = (dispatch) => ({
  handleComment: () => {
    dispatch(commentaire());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comment);
