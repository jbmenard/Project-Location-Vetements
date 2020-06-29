import { connect } from 'react-redux';
import Comment from 'src/components/Comment';
import { commentaire } from 'src/actions/user';
import {
  sendForm, changeInputCommentProduct, fetchProducts, ResetCommentMsg,
} from 'src/actions/product';

const mapStateToProps = (state) => ({
  commentMessage: state.userReducer.commentMessage,
  isClick: state.userReducer.isClick,
  inputValue: state.productReducer.commentProduct,
  isLogged: state.userReducer.logged,
});
const mapDispatchToProps = (dispatch) => ({
  handleComment: () => {
    dispatch(commentaire());
  },
  sendForm: () => {
    console.log('je suis dans le formulaire');
    const action = sendForm();
    dispatch(action);
    const aFetchProduct = fetchProducts();
    dispatch(aFetchProduct);
    const aResetCommentMsg = ResetCommentMsg();
    dispatch(aResetCommentMsg);
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
