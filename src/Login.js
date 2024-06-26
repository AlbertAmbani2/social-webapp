// src/Login.js
import React, { useState } from 'react';
import { Eye, EyeSlashFill } from 'react-bootstrap-icons'; // React Icons

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    
    try {
      // JSONPlaceholder API endpoint for users.
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();

      const user = users.find((u) => u.username === username && u.address.zipcode === password);

      if (user) {
        onLogin(user);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error fetching users');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-3 mx-auto" style={{ maxWidth: '400px' }}>
      <div className="text-center mb-3">
        <i>Social Web-App</i>
      </div>
        <h2 className="text-center">Login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeSlashFill /> : <Eye />}
              </button>
            </div>
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary btn-block" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
