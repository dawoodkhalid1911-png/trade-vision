import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landingpage from './components/Landingpage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
function App() {
  const isLoggedIn = localStorage.getItem('token') ? true : false;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;