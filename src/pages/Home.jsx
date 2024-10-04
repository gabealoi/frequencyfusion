// src/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Web Application</h1>
      <p>This is the home page where you can find the latest updates and explore features.</p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
};

// NOTE: these styles will be removed and are here as a placeholder as is everything else in this page
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
