import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate();
  const { taskId } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/api/tasks/getTask/${taskId}`);
        const task = response.data;
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
        setPriority(task.priority);
      } catch (error) {
        console.error('Error get data task:', error);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/tasks/edit/${taskId}`, { title, description, dueDate, priority });
      navigate('/'); // Redirect dashboard
    } catch (error) {
      console.error('Error update task:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>Edit Task</Typography>
      <form onSubmit={handleUpdate}>
        <TextField label="Title" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField label="Description" fullWidth margin="normal" value={description} onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField label="Due Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={dueDate} onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <TextField label="Priority" fullWidth margin="normal" value={priority} onChange={(e) => setPriority(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}> Update </Button>
      </form>
    </Container>
  );
};

export default EditTask;
