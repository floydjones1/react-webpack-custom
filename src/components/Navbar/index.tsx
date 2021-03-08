import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import '../../main.css'

interface Props {
  label: string
}

const NavBar: React.FC<Props> = ({ label }) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          News
    </Typography>
        <Button color="inherit">{label}</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar