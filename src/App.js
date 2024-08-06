import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <header>
        <img src={logo} style={{ width: '150px', height: '150px', marginLeft: '685px' }} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/clickAdd" element={<AddTask />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
