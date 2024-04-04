import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { HouseDoor, Bell, Envelope } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import SidebarData from '../components/sidebar/SidebarData';
import './NavbarHook.css';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive'; // Step 1

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const isMobile = useMediaQuery({ maxWidth: '400px' }); // Step 2

  const showSidebar = () => setSidebar(!sidebar);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
    // Perform any other actions based on the tab switch
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

  useEffect(() => {
    if (isMobile) { // Step 3
      setSidebar(false);
    }
  }, [isMobile]);

  return (
    <div className="container">
      <>
        <IconContext.Provider value={{ color: 'undefined' }}>
          <header className="top-navbar fixed-top bg-light d-flex justify-content-center align-items-center">
          <nav className="nav container d-flex align-items-center">
              <div className="menu-bars" onClick={showSidebar}>
                <IoMenu />
              </div>

              <Tabs
                value={activeTab}
                className="tabs"
                onChange={handleTabChange}
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
            </nav>
          </header>
          
          {isMobile && ( // Step 3
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
          )}
        </IconContext.Provider>
      </>
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
