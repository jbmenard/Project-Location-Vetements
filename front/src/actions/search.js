export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeText = (value) => ({
  type: CHANGE_TEXT,
  value,
});
