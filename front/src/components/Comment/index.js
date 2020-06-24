import React from 'react';
import Button from 'src/components/Button';
import './style.scss';

const Comment = ({handleComment}) => (
  <>
    <h3 className="comment-title">avis client</h3>
    <div className="comment">
      <div className="comment-avis1">
        <h5 className="comment-name">keke du 29.</h5>
        <p> Whouaaa se costume a fait fureur c'est trop de la bombe de balle.</p>
      </div>
      <div className="comment-avis2">
        <h5 className="comment-name">jb du 93.</h5>
        <p>Kévin le loueur est vraiment tres sympa, et le costume est cooool</p>
      </div>
      <h5 className="comment-name">germain du 53.</h5>
      <div className="comment-avis3">
        <p>Kévin le loueur est vraiment tres sympa, et le costume est cooool</p>
      </div>
      <div onClick={handleComment} className="comment-button">
        <Button type="submit" size="large" value="nouveau commentaire" color="orange" />
      </div>
    </div>

  </>
);

export default Comment;
