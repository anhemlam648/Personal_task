import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
const Login = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" >Login</Typography>
      <form>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth >Login</Button>
      </form>
    </Container>
  );
};

export default Login;
