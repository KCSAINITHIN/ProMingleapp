import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', user); // Sending POST request to backend
      if (response.data.success) {
        // Handle successful sign-up (e.g., redirect to login or dashboard)
        alert("User signed up successfully!");
      } else {
        alert("Error signing up. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
