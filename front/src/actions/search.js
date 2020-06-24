export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_SEARCH_BAR_VALUE = 'CHANGE_SEARCH_BAR_VALUE';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_BAR_VALUE,
  value,
});
