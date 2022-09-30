import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const authToken = sessionStorage.getItem('Auth Token');

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }

  const navigate = useNavigate();

  return (
    <Box sx={{flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Golf Statistics </Typography>
          {authToken && <Button color="inherit" onClick={handleLogout}>Log out</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header