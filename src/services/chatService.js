const BASE_URL = 'https://devapi.beyondchats.com/api';

export const getAllChats = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/get_all_chats?page=${page}`);
  const data = await response.json();
  return data;
};

export const getChatMessages = async (chat_id) => {
  const response = await fetch(`${BASE_URL}/get_chat_messages?chat_id=${chat_id}`);
  const data = await response.json();
  return data;
};
