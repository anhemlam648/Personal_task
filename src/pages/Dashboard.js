import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Grid, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center">Dashboard</Typography>
      <Grid container spacing={3} style={{marginTop: '30px'}}>
        <Grid item xs={12} md={4}>
          <Paper>
            <Typography variant="h6">Today's Tasks</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Typography variant="h6">Statistics</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{marginTop: '50px'}}>Add Task</Button>
    </Container>
  );
};

export default Dashboard;
