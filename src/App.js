import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
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
      </Routes>
    </div>
  </Router>
  );
}

export default App;
