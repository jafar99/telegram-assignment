import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { getAllChats } from '../services/chatService';

const Sidebar = ({ onSelectChat, setInitialChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getAllChats().then(response => {
      if (response.data && response?.data?.data) {
        setChats(response?.data?.data);
        if (response.data.data.length > 0) {
          setInitialChat(response.data.data[0].id); 
        }
      }
    });
  }, [setInitialChat]);

  return (
    <List>
      {chats?.map((chat) => (
        <div key={chat?.id}>
          <ListItem button onClick={() => onSelectChat(chat?.id)}>
            <ListItemText>
              {chat?.creator?.name ? chat?.creator?.name : "Unknown"} ({chat?.msg_count})
            </ListItemText>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default Sidebar;
