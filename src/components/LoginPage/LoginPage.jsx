import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css'; 

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Perform any login logic here if needed

    // Navigate to the /form route
    navigate('/form');
  };

  return (
    <div className="parent">
      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="text-input" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="text-input" placeholder="Enter your password" required />
          </div>
          <button type="button" className="submit-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
