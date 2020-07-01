import React from 'react';
import Button from 'src/components/Button';
import Commentaire from './commentaire';
import './style.scss';

const Comment = ({
  handleComment, isClick, isLogged, product, sendForm, changeInputCommentProduct, inputValue,
}) => {
  const handleSubmit = (event, productId) => {
    event.preventDefault();
    console.log('je sis la');
    
    sendForm(productId);
  };

  const handleChange = (event) => {
    changeInputCommentProduct(event.target.value);
  };
  // console.log('product', product.id);
  return (
    <div className="comment">
      <h4 className="comment-formtitle">Commentaires</h4>
      {product
        ? product.comments.map((comment) => (
          <Commentaire comment={comment} />

        ))
        : 'Aucun commentaire'}
      {isLogged
      && (
      <div onClick={handleComment} className="comment-button">
        <Button type="button" size="x-large" value="Nouveau commentaire" color="orange" />
      </div>
      )}
      {isClick && (
      <div className="comment-form">
        <form onSubmit={(event) => handleSubmit(event, product.id)}>
          <input className="comment-form--textarea" type="textarea" onChange={handleChange} value={inputValue} placeholder="Commenter..." />
          <input className="comment-form--submit" type="submit" value="Envoyer" />
        </form>
      </div>
      )}
    </div>
  );
};

export default Comment;
