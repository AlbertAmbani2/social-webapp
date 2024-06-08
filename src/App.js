// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import Profile from './pages/Profile';
import HomePage from './Home/Homepage';
import PremiumMembership from './components/PremiumMembership';
import Following from './hooks/Following';
import Paywall from './components/paywall';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('feed');

  const [postCount, setPostCount] = useState(0); // State to track the number of posts viewed
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

  // Function to increase post count and check if paywall should be shown
  const incrementPostCount = () => {
    setPostCount(prevCount => {
      const newCount = prevCount + 1;
      if (!user && newCount > 20) {
        navigate('/paywall');
      }
      return newCount;
    });
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <div className="flex-grow-1">
                <HomePage
                  incrementPostCount={incrementPostCount}
                  user={user}
                  isPremium={user?.isPremium}
                />
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

        <Route
          path="/following"
          element={
            user ? (
              <Following />
            ) : null
          }
        />

        <Route
          path="/paywall"
          element={
            !user ? (
              <Paywall />
            ) : null
          }
        />
      </Routes>
    </div>
  );
};

export default App;