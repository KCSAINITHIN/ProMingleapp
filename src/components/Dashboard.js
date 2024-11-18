import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome to Your Dashboard</h1>
      <Link to="/groups">
        <button>My Groups</button>
      </Link>
      <Link to="/about">
        <button>About Us</button>
      </Link>
    </div>
  );
};

export default Dashboard;
