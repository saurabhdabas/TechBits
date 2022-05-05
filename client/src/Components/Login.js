import React from 'react';
import {Box,Button} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const handleClick = (e) => {
    window.open('/auth/google')
  }
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#F3F6F9'
      }}
      display='flex'
      flexDirection={'column'}
    >
      <Box sx={{ width:'30vw', height:'50vh',m: "auto" }} display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
        <img src="logo.png" height="200" alt="company logo"/>
        <Button sx={{ backgroundColor: '#DC3545' }} startIcon={<GoogleIcon />}variant="contained" onClick={handleClick}>
          Login With Google
        </Button>
      </Box>
    </Box>
  )
}

export default Login
