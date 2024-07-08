import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleSetInitialChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <Box>
      <Header />
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row', lg: 'row' }}>
        <Sidebar onSelectChat={setSelectedChatId} setInitialChat={handleSetInitialChat} />
        {selectedChatId && <ChatWindow chatId={selectedChatId} />}
      </Box>
    </Box>
  );
};

export default ChatPage;
