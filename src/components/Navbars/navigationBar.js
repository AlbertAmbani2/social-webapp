import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Tab, Tabs } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { HouseDoor, Bell, Envelope } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import SidebarData from '../sidebar/SidebarData';
import './NavigationBar.css';
import { IconContext } from 'react-icons';

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');

  const showSidebar = () => setSidebar(!sidebar);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebar && !event.target.closest('.nav-menu')) {
        setSidebar(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <div className="container">
      <>
        <IconContext.Provider value={{ color: 'undefined' }}>
          <AppBar position="fixed" className="top-navbar"
           sx={{ borderBottom: '1px solid #e1e8ed',
            boxShadow: 'none',
             backgroundColor: 'lightgray' }}>
            <Toolbar>
              <IconButton
                edge="start"
                className="menu-bars"
                color="inherit"
                aria-label="menu"
                onClick={showSidebar}
                style={{ color: 'grey' }}
              >
                <IoMenu />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'grey' }}>
                My App
              </Typography>
              <Tabs
                value={activeTab}
                className="tabs"
                onChange={handleTabChange}
                //TabIndicatorProps={{ style: { backgroundColor: '#fffff' } }}
              >
                <Tab
                  label="News Feed"
                  value="feed"
                  className={`tab ${activeTab === 'feed' ? 'active' : ''}`}
                  sx={{
                    textTransform: 'none',
                  }}
                />
                <Tab
                  label="Following"
                  value="following"
                  className={`tab ${activeTab === 'following' ? 'active' : ''}`}
                  sx={{
                    textTransform: 'none',
                  }}
                />
              </Tabs>
            </Toolbar>
          </AppBar>
          {/* sidebar */}
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
      {/* Bottom navigation bar */}
      <nav className="navbar fixed-bottom bg-light mt-4 border">
        <ul className="navbar-nav flex-row justify-content-between w-100">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <HouseDoor size={24} className={`mx-4 ${activeTab === 'home' ? 'active' : ''}`} />
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="notification">
              <Bell size={24} className={`mx-4 ${activeTab === 'bell' ? 'active' : ''}`} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="message">
              <Envelope size={24} className={`mx-4 ${activeTab === 'envelope' ? 'active' : ''}`} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
