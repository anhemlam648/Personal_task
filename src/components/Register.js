import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { email, password, name }); // handle call Api
      // action token
      console.log(response.data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth margin="normal" value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField label="Email" fullWidth margin="normal" value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth type="submit">Register</Button>
      </form>
    </Container>
  );
};

export default Register;
