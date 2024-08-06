import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // List Task
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);
  const navigate = useNavigate();

  const AddClick = () => {
    navigate('/clickAdd');
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center">Dashboard</Typography>
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        <Grid item xs={12} md={4}>
          <Paper>
            <Typography variant="h6">Today's Tasks</Typography>
            {/* Get Task */}
            {tasks.map(task => (
              <Typography key={task._id}>{task.title}</Typography>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Typography variant="h6">Statistics</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '50px' }} onClick={AddClick}>Add Task</Button>
    </Container>
  );
};

export default Dashboard;
