import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Telegram
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
