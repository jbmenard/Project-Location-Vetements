export const CREATE_USER = 'CREATE_USER';
export const CHANGE_VALUE_STATE_USER = 'CHANGE_VALUE_STATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const CREATE_USER_INFORMATIONS = 'CREATE_USER_INFORMATIONS';
export const CHANGE_VALUE_STATE_USER_INFORMATIONS = 'CHANGE_VALUE_STATE_USER_INFORMATIONS';

export const createUser = () => ({
  type: CREATE_USER,
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
