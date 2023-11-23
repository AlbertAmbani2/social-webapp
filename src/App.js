// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';
import Login from './Login';
import ProfileSection from './Profile';
import HomePage from './Homepage';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('feed');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="#home">Your App Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {user && (
              <Button
                variant="outline-primary"
                onClick={toggleSidebar}
                className="toggle-btn"
              >
                ☰ Toggle Sidebar
              </Button>
            )}
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/profile" element={<ProfileSection user={user} onLogout={handleLogout} />} />
          <Route path="/home" element={<HomePage />} />
          
        </Routes>

        {user ? (
          <div className="d-flex">
            {user && <Sidebar isOpen={isSidebarOpen} />}
            <div className={`flex-grow-1 ${user && isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
              {activeTab === 'feed' ? (
                <HomePage />
              ) : (
                <ProfileSection user={user} onLogout={handleLogout} />
              )}
            </div>
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
