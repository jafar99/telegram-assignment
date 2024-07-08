import React, { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { getChatMessages } from "../services/chatService";

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      getChatMessages(chatId)
        .then((response) => {
          setMessages(response?.data);
        })
        .catch((error) => {
          console.error("Error fetching chat messages:", error);
        });
    }
  }, [chatId]);

  console.log(messages);

  return (
    <Box>
      <List>
        {messages?.map((message) => (
          <ListItem key={message?.id}>
            <ListItemText>
              {message?.message}
              <ListItemText> - {message?.sender.name} </ListItemText>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatWindow;
