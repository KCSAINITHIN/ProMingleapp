import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="welcome-banner">
        <h1>Welcome to ProMingle</h1>
        <p>“Connecting people, building experiences.”</p>
        <Link to="/signup" className="get-started">Let’s Get Started</Link>
      </div>
      <footer>
        <p>Follow us:</p>
        <div className="social-icons">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://youtube.com">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
