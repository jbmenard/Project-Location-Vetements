import { connect } from 'react-redux';
import Comment from 'src/components/Comment';
import { commentaire } from 'src/actions/user';
import { sendForm, changeInputCommentProduct } from 'src/actions/product';

const mapStateToProps = (state) => ({
  commentMessage: state.userReducer.commentMessage,
  isClick: state.userReducer.isClick,
  inputValue: state.productReducer.commentProduct,

});
const mapDispatchToProps = (dispatch) => ({
  handleComment: () => {
    dispatch(commentaire());
  },
  sendForm: () => {
    console.log('je suis dans le formulaire');
    const action = sendForm();
    dispatch(action);
  },
  changeInputCommentProduct: (value) => {
    const action = changeInputCommentProduct(value);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comment);
