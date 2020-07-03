export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
export const TOGGLE_REDIRECTION = 'TOGGLE_REDIRECTION';
export const TOGGLE_REDIRECTION_UPDATE = 'TOGGLE_REDIRECTION_UPDATE';


export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR,
});

export const toggleRedirection = () => ({
  type: TOGGLE_REDIRECTION,
});

export const toggleRedirectionUpdate = () => ({
  type: TOGGLE_REDIRECTION_UPDATE,
});
