// src/NavigationBar.js
import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { HouseDoor, Bell, Envelope } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useTabs from './hooks/useTabs';

const NavigationBar = ({ onTabChange }) => {
  const { activeTab, handleTabChange } = useTabs('feed');

  return (
    <div className="container-fluid">
      {/* Top navigation bar */}
      <Card className="navbar navbar-light bg-light mb-3">
        <Card.Body className="text-center container">
          <Card.Title></Card.Title>
          <ButtonGroup className="position-relative">
            <Button
              variant={activeTab === 'feed' ? 'secondary' : 'light'}
              onClick={() => handleTabChange('feed')}
              className="text-decoration-none"
            >
              Feed
            </Button>
            <Button
              variant={activeTab === 'following' ? 'secondary' : 'light'}
              onClick={() => handleTabChange('following')}
              className="text-decoration-none"
            >
              Following
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      
     {/* Main content of the home page */}
      <div className="bg-light p-4 rounded">
            <h2 className="mb-4">News Feed</h2>
            {/* Add your content here */}
            <div className="card mb-3">
              <div className="card-body">
                <p className="card-text">Sample post content...</p>
              </div>
            </div>
            {/* Add more posts as needed */}
          </div>

      {/* Bottom navigation bar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav flex-row justify-content-between w-100">
            <li className="nav-item">
              {/* Replace <a> with <Link> */}
              <Link to="/home" className="nav-link">
                <HouseDoor size={24} className={`mx-4 ${activeTab === 'home' ? 'active' : ''}`} />
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Bell size={24} className={`mx-4 ${activeTab === 'bell' ? 'active' : ''}`} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Envelope size={24} className={`mx-4 ${activeTab === 'envelope' ? 'active' : ''}`} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
