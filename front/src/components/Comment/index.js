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
    <div>
      <h4>COMMENTAIRE</h4>
      <div>
        {comments.map((comment) => (
          <Commentaire comment={comment} />

        ))}
      </div>
      <div onClick={handleComment} className="comment-button">
        <Button type="button" size="large" value="nouveau commentaire" color="orange" />
      </div>
    
      {isClick && (

        <form onSubmit={handleSubmit} className="formcommentaire">
          <input className="formcommentaire-textarea" type="textarea" onChange={handleChange} value={inputValue} placeholder="commentaire" />
          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default Comment;
