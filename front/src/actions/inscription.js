export const CONNECT_USER = 'CONNECT';
export const CREATE_USER = 'CREATE_USER';
export const CHANGE_VALUE_STATE_USER = 'CHANGE_VALUE_STATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const CREATE_USER_INFORMATIONS = 'CREATE_USER_INFORMATIONS';
export const CHANGE_VALUE_STATE_USER_INFORMATIONS = 'CHANGE_VALUE_STATE_USER_INFORMATIONS';
export const LOG_USER = 'LOG_USER';
export const INFO_USER = 'INFO_USER';
export const CHECK = 'CHECK';

export const connectUser = () => ({
  type: CONNECT_USER,
});

export const changeValueStateUser = (value, name) => ({
  type: CHANGE_VALUE_STATE_USER,
  value,
  name,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const createUserInformations = () => ({
  type: CREATE_USER_INFORMATIONS,
});

export const changeValueStateUserInformations = (value, name) => ({
  type: CHANGE_VALUE_STATE_USER_INFORMATIONS,
  value,
  name,
});

export const createUser = () => ({
  type: CREATE_USER,
});

export const logUser = (userData) => ({
  type: LOG_USER,
  userData,
});

export const infoUser = (infoUser) => ({
  type: INFO_USER,
  infoUser,
});

export const check = () => ({
  type: CHECK,
});
