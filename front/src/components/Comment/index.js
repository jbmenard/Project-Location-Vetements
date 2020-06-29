import React from 'react';
import Button from 'src/components/Button';
import Commentaire from './commentaire';
import './style.scss';

const Comment = ({ handleComment, isClick, comments, sendForm, changeInputCommentProduct, inputValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const handleChange = (event) => {
    changeInputCommentProduct(event.target.value);
  };
  return (
    <div className="comment">
      <h4 className="comment-formtitle">Commentaires</h4>
      <div>
        {comments.map((comment) => (
          <Commentaire comment={comment} />

        ))}
      </div>
      <div onClick={handleComment} className="comment-button">
        <Button type="button" size="x-large" value="Nouveau commentaire" color="form" />
      </div>
      {isClick && (
      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          <input className="comment-form--textarea" type="textarea" onChange={handleChange} value={inputValue} placeholder="Écrire un nouveau commentaire" />
          <input className="comment-form--submit" type="submit" />
        </form>
      </div>
      )}
    </div>
  );
};

export default Comment;
