export const LOGOUT = 'LOGOUT';
export const SAVE_LOGOUT = 'SAVE_LOGOUT';
export const COMMENTAIRE = 'COMMENTAIRE';

export const logout = () => ({
  type: LOGOUT,
});

export const saveLogout = () => ({
  type: SAVE_LOGOUT,
});

export const commentaire = () => ({
  type: COMMENTAIRE,
});
