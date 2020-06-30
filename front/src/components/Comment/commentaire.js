import React from 'react';
import './style.scss';

const Commentaire = ({comment}) => {
  return (
    <div className="comment-form">
      <div className="comment-user">
        <img className="comment-avatar" src={comment.app_user.AppUserInfo ? comment.app_user.AppUserInfo.avatar : 'http://www.clker.com/cliparts/T/d/j/M/D/A/silueta-negra-md.png'}/>
        <h5 className="comment-name">{comment.app_user.AppUserInfo.first_name}</h5>
      </div>
      <p className="comment-content">{comment.content}</p>
    </div>
  );
};

export default Commentaire;
