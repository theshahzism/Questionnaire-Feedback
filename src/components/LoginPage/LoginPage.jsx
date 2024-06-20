import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  // Static user data for authentication
  const users = [
    { username: 'user1', password: 'password1', role: 'admin' },
    { username: 'user2', password: 'password2', role: 'user' },
  ];

  const handleLogin = () => {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Check if the entered username and password match any user in the static data
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/form');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="parent">
      <div className="container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-input"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="text-input"
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && (
            <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
              {errorMessage}
            </div>
          )}
          <button type="button" className="submit-button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
