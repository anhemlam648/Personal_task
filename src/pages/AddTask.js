import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/tasks/addtask', { title, description, dueDate, priority });
      navigate('/'); 
    } catch (error) {
      console.error('Error Add task:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>Add Task</Typography>
      <form onSubmit={handleAdd}>
        <TextField label="Title" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)}
          required />
        <TextField label="Description" fullWidth margin="normal" value={description} onChange={(e) => setDescription(e.target.value)}
          required />
        <TextField label="Due Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={dueDate} onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <TextField label="Priority" fullWidth margin="normal" value={priority} onChange={(e) => setPriority(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }} > Add </Button>
      </form>
    </Container>
  );
};

export default AddTask;
