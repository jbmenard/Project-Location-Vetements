export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_SEARCH_BAR_VALUE = 'CHANGE_SEARCH_BAR_VALUE';
export const CLEAN_SEARCH_BAR = 'CLEAN_SEARCH_BAR';
export const PRODUCT_NOT_FOUND_ACTION = 'PRODUCT_NOT_FOUND_ACTION';
export const PRODUCT_FOUND = 'PRODUCT_FOUND';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_BAR_VALUE,
  value,
});

export const cleanSearchBar = () => ({
  type: CLEAN_SEARCH_BAR,
});

export const productNotFoundAction = () => ({
  type: PRODUCT_NOT_FOUND_ACTION,
});

export const productFound = () => ({
  type: PRODUCT_FOUND,
});
