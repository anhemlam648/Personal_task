import React from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">Register</Typography>
      <form>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>Register</Button>
      </form>
    </Container>
  );
};

export default Register;
