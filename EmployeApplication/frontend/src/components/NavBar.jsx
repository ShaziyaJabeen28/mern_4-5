import { AppBar, Toolbar, Typography, Button, ThemeProvider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar position="fixed">
              <Toolbar>
                  <Typography variant="h6" >Home</Typography>&nbsp;
                  <Typography variant="h4" sx={{ flexGrow: 1 }}>Employee Application</Typography>&nbsp;
                  <Link to='/add'>
                      <Button variant='contained' color="inherit">Add</Button>
                  </Link>&nbsp;
                  <Link to='/dis'>
                      <Button variant='contained' color="inherit">View</Button>
                  </Link>&nbsp;
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default NavBar