import React from 'react';

const Commentaire = ({comment}) => {
  return (
  <div>
    <h5 className="comment-name">{comment.app_user.AppUserInfo.first_name}</h5>
    <p>{comment.content}</p>
  </div>
);}

export default Commentaire;
