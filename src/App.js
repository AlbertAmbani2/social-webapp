// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Profile from './routes/Profile';
import HomePage from './routes/Homepage';
import PremiumMembership from './components/PremiumMembership';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check local storage for user data on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    // Remove user data from local storage
    localStorage.removeItem('user');
    // Redirect to the login page after logout
    navigate('/');
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <div className="flex-grow-1">
                <HomePage />
              </div>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/profile"
          element={
            user ? (
              <div className="flex-grow-1">
                <Profile user={user} onLogout={handleLogout} />
              </div>
            ) : null
          }
        />

        <Route
          path="/premium-membership"
          element={
            user && !user.isPremium ? (
              <PremiumMembership />
            ) : null
          }
        />
      </Routes>
    </div>
  );
};

export default App;
