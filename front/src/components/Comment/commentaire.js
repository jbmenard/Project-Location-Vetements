import React from 'react';
import './style.scss';

const Commentaire = ({comment}) => {
  return (
    <div className="comment-form">
      <h5 className="comment-name">{comment.app_user.AppUserInfo.first_name}</h5>
      <p className="comment-content">{comment.content}</p>
    </div>
  );
};

export default Commentaire;
