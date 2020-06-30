import React from 'react';
import Button from 'src/components/Button';
import Commentaire from './commentaire';
import './style.scss';

const Comment = ({
  handleComment, isClick, isLogged, comments, sendForm, changeInputCommentProduct, inputValue,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const handleChange = (event) => {
    changeInputCommentProduct(event.target.value);
  };
  console.log('comments', comments);
  return (
    <div className="comment">
      <h4 className="comment-formtitle">Commentaires</h4>
      <div>
        {comments
          ? comments.comments.map((comment) => (
            <Commentaire comment={comment} />

          ))
          : 'Aucun commentaire'}
      </div>
      {isLogged
      && (
      <div onClick={handleComment} className="comment-button">
        <Button type="button" size="x-large" value="Nouveau commentaire" color="orange" />
      </div>
      )}
      {isClick && (
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <input className="comment-form--textarea" type="textarea" onChange={handleChange} value={inputValue} placeholder="..." />
          <input className="comment-form--submit" type="submit" value="OK" />
        </form>
      </div>
      )}
    </div>
  );
};

export default Comment;
