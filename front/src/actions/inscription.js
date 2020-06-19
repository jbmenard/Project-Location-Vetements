export const CREATE_USER = 'CREATE_USER';
export const CHANGE_VALUE_STATE_USER = 'CHANGE_VALUE_STATE_USER';
export const FETCH_USER = 'FETCH_USER';

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
