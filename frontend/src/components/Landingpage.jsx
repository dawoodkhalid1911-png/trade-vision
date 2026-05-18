import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navbar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 50px',
        background: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          <span style={{ fontSize: '30px' }}>🌤️</span> Trade Vision
        </div>
        <div>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '10px 25px',
              marginRight: '10px',
              border: '2px solid #667eea',
              background: 'transparent',
              color: '#667eea',
              borderRadius: '25px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            style={{
              padding: '10px 25px',
              border: 'none',
              background: '#667eea',
              color: 'white',
              borderRadius: '25px',
              cursor: 'pointer'
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '80px 50px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1 style={{ fontSize: '48px', color: 'white', marginBottom: '20px' }}>
            Welcome to <span style={{ color: '#ffd89b' }}>Trade Vision</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'white', marginBottom: '30px' }}>
            Your personal weather companion. Get real-time weather updates
            and manage your profile with ease.
          </p>
          <button
            onClick={() => navigate('/signup')}
            style={{
              padding: '15px 35px',
              fontSize: '18px',
              border: 'none',
              background: 'white',
              color: '#667eea',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginRight: '15px'
            }}
          >
            Get Started 🚀
          </button>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '15px 35px',
              fontSize: '18px',
              border: '2px solid white',
              background: 'transparent',
              color: 'white',
              borderRadius: '50px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </div>
        <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            display: 'inline-block',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '64px' }}>🌤️</div>
            <div style={{ fontSize: '48px', fontWeight: 'bold' }}>24°C</div>
            <div style={{ fontSize: '24px', color: '#666' }}>Sunny</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'white', padding: '60px 50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '50px' }}>Features</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ padding: '30px', background: '#f0f0f0', borderRadius: '15px' }}>
            <div style={{ fontSize: '48px' }}>🌦️</div>
            <h3>Weather Updates</h3>
            <p>Real-time weather for any city</p>
          </div>
          <div style={{ padding: '30px', background: '#f0f0f0', borderRadius: '15px' }}>
            <div style={{ fontSize: '48px' }}>👤</div>
            <h3>Profile Management</h3>
            <p>Create, update, or delete your profile</p>
          </div>
          <div style={{ padding: '30px', background: '#f0f0f0', borderRadius: '15px' }}>
            <div style={{ fontSize: '48px' }}>🔐</div>
            <h3>Secure Login</h3>
            <p>Protected with authentication</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;