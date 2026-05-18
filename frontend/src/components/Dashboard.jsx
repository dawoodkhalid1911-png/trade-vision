import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Lahore');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
    fetchWeather('Lahore');
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a701c5092dd88f5b9fa1789201193f44&units=metric`);
      setWeather({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        condition: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    } catch (err) {
      alert('City not found! Try another city.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>📊 Trade Vision</div>
        <nav style={styles.nav}>
          <a href="/dashboard" style={styles.navItemActive}>🏠 Dashboard</a>
          <a href="/profile" style={styles.navItem}>👤 Profile</a>
          <a href="/my-jobs" style={styles.navItem}>💼 My Jobs</a>
          <a href="/chat" style={styles.navItem}>💬 Chat</a>
        </nav>
        <button onClick={handleLogout} style={styles.logoutBtn}>🚪 Logout</button>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
          <div style={styles.userBadge}>
            <span style={styles.userEmoji}>👋</span>
            <span style={styles.userName}>Welcome, {user?.name}!</span>
          </div>
        </div>

        {/* Weather Card */}
        <div style={styles.weatherCard}>
          <div style={styles.weatherHeader}>
            <h2 style={styles.weatherTitle}>🌤️ Weather Forecast</h2>
            <div style={styles.searchBox}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..."
                style={styles.cityInput}
                onKeyPress={(e) => e.key === 'Enter' && fetchWeather(city)}
              />
              <button onClick={() => fetchWeather(city)} style={styles.searchBtn}>
                🔍 Search
              </button>
            </div>
          </div>

          {loading ? (
            <div style={styles.loading}>Loading weather data...</div>
          ) : weather ? (
            <div style={styles.weatherInfo}>
              <div style={styles.weatherMain}>
                <img src={weather.icon} alt={weather.condition} style={styles.weatherIcon} />
                <div style={styles.temp}>{weather.temperature}°C</div>
              </div>
              <div style={styles.weatherDetails}>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>📍 Location</span>
                  <span style={styles.detailValue}>{weather.city}</span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>🌡️ Condition</span>
                  <span style={styles.detailValue}>{weather.condition}</span>
                </div>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>💧 Humidity</span>
                  <span style={styles.detailValue}>{weather.humidity}%</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statEmoji}>📁</div>
            <div style={styles.statNumber}>0</div>
            <div style={styles.statLabel}>Active Jobs</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statEmoji}>✅</div>
            <div style={styles.statNumber}>0</div>
            <div style={styles.statLabel}>Completed Jobs</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statEmoji}>⭐</div>
            <div style={styles.statNumber}>0</div>
            <div style={styles.statLabel}>Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Segoe UI, Roboto, sans-serif'
  },
  // Sidebar styles
  sidebar: {
    width: '260px',
    backgroundColor: '#1a1a2e',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 0',
    position: 'fixed',
    height: '100vh',
    left: 0,
    top: 0
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '0 24px',
    marginBottom: '40px',
    color: '#00d4ff'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  navItem: {
    padding: '12px 24px',
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'all 0.3s',
    cursor: 'pointer'
  },
  navItemActive: {
    padding: '12px 24px',
    backgroundColor: '#16213e',
    color: '#00d4ff',
    textDecoration: 'none',
    fontSize: '16px',
    borderLeft: '4px solid #00d4ff',
    cursor: 'pointer'
  },
  logoutBtn: {
    margin: '20px 24px',
    padding: '10px',
    backgroundColor: '#e94560',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  // Main content styles
  main: {
    flex: 1,
    marginLeft: '260px',
    padding: '30px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    backgroundColor: 'white',
    padding: '20px 30px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  title: {
    fontSize: '28px',
    color: '#1a1a2e',
    margin: 0
  },
  userBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#f0f2f5',
    padding: '8px 16px',
    borderRadius: '40px'
  },
  userEmoji: {
    fontSize: '20px'
  },
  userName: {
    fontWeight: '600',
    color: '#1a1a2e'
  },
  // Weather card styles
  weatherCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },
  weatherHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '15px'
  },
  weatherTitle: {
    fontSize: '20px',
    color: '#1a1a2e',
    margin: 0
  },
  searchBox: {
    display: 'flex',
    gap: '12px'
  },
  cityInput: {
    padding: '10px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    width: '200px'
  },
  searchBtn: {
    padding: '10px 20px',
    backgroundColor: '#00d4ff',
    color: '#1a1a2e',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    color: '#888'
  },
  weatherInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  },
  weatherMain: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  weatherIcon: {
    width: '80px',
    height: '80px'
  },
  temp: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1a1a2e'
  },
  weatherDetails: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px'
  },
  detailItem: {
    textAlign: 'center',
    minWidth: '100px'
  },
  detailLabel: {
    display: 'block',
    fontSize: '12px',
    color: '#888',
    marginBottom: '8px'
  },
  detailValue: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a1a2e'
  },
  // Stats grid styles
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px'
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  statEmoji: {
    fontSize: '32px',
    marginBottom: '12px'
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#00d4ff',
    marginBottom: '8px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#888'
  }
};

export default Dashboard;