import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IconEdit from '@mui/icons-material/Edit';
import IconDelete from '@mui/icons-material/Delete';
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
  //add
  const AddClick = () => {
    navigate('/clickAdd');
  };
  //edit
  const EditClick = (taskId) => {
    navigate(`/editTask/${taskId}`);
  };
  //delete
  const DeleteClick = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/delete/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
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
              <Typography key={task._id} style={{ padding: '16px', marginBottom: '10px' }}>
                <Typography variant="body1">Title: {task.title}</Typography>
                <Typography variant="body2">Description:{task.description}</Typography>
                <Typography variant="body2" color="textSecondary">Due Date: {task.dueDate}</Typography>
                <Typography variant="body2" color="textSecondary">Priority: {task.priority}</Typography>
              </Typography>
            ))}
             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <IconButton color="primary" onClick={() => EditClick(task._id)}>
                <IconEdit />
              </IconButton>
              <IconButton color="secondary" onClick={() => DeleteClick(task._id)}>
                <IconDelete />
              </IconButton>
            </div>
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
