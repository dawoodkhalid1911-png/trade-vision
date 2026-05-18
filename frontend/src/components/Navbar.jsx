import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#1a1a2e',
      color: 'white'
    }}>
      {/* Left side - Logo */}
      <h1 style={{ margin: 0, color: '#139fbf' }}>Trade Vision</h1>

      {/* Right side - Buttons */}
      <div>
        <button
          onClick={() => navigate('/login')}
          style={{
            marginRight: '10px',
            padding: '8px 20px',
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          Login
        </button>

        <button
          onClick={() => navigate('/signup')}
          style={{
            padding: '8px 20px',
            backgroundColor: '#0e0d0d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;