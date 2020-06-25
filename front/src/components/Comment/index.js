import React from 'react';
import Button from 'src/components/Button';
import Commentaire from './commentaire';
import './style.scss';

const Comment = ({ handleComment, isClick, comments }) => (
  <div>
    <div>
      {comments.map((comment) => (
        <Commentaire comment={comment} />

      ))}
    </div>
    <div onClick={handleComment} className="comment-button">
      <Button type="button" size="large" value="nouveau commentaire" color="orange" />
    </div>
    {isClick && (
      <form>
        <textarea>coucou</textarea>
      </form>
    )}
  </div>

);

export default Comment;
