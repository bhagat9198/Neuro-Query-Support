import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

let drawerWidth = 240;

export default function Header(props) {
  const { handleDrawerToggle, hideDrawer } = props;
  let isUserLoggedIn = false;

  if (hideDrawer) {
    drawerWidth = 0;
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Query
        </Typography>
        <Button color="inherit">{!isUserLoggedIn ? 'Login' : ''}</Button>
      </Toolbar>
    </AppBar>
  )
}