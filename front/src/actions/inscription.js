export const CONNECT_USER = 'CONNECT';
export const CREATE_USER = 'CREATE_USER';
export const CHANGE_VALUE_STATE_USER = 'CHANGE_VALUE_STATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const CREATE_USER_INFORMATIONS = 'CREATE_USER_INFORMATIONS';
export const CHANGE_VALUE_STATE_USER_INFORMATIONS = 'CHANGE_VALUE_STATE_USER_INFORMATIONS';
export const LOG_USER = 'LOG_USER';
export const INFO_USER = 'INFO_USER';
export const CHECK = 'CHECK';
export const TOGGLE_INPUT = 'TOGGLE_INPUT';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_MOBILE = 'UPDATE_MOBILE';
export const HIDDEN_INPUT = 'HIDDEN_INPUT';

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

export const toggleInput = () => ({
  type: TOGGLE_INPUT,
});

export const updateFirstName = () => ({
  type: UPDATE_FIRST_NAME,
});

export const updateMobile = () => ({
  type: UPDATE_MOBILE,
});

export const hiddenInput = (value) => ({
  type: HIDDEN_INPUT,
  value,
});
