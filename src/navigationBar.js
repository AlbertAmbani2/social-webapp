// src/NavigationBar.js
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { HouseDoor, Bell, Envelope } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useTabs from './hooks/useTabs';
import SidebarData from './components/sidebar/SidebarData';
import './NavigationBar.css';
import { IconContext } from 'react-icons';

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');

  const showSidebar = () => setSidebar(!sidebar);

  //const { activeTab, handleTabChange } = useTabs('feed');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Perform any other actions based on the tab switch
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the clicked element is outside the sidebar
      if (sidebar && !event.target.closest('.nav-menu')) {
        setSidebar(false);
      }
    };

    // Add event listener to close sidebar on outside click
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <div className="container">
      <>
        <IconContext.Provider value={{ color: 'undefined' }}>
          <div className="top-navbar fixed-top bg-light">
            <Link to="#" >
              <Button variant="light" className="menu-bars" onClick={showSidebar}>
                ☰
              </Button>
            </Link>
            
            <Button
            variant={activeTab === 'feed' ? 'secondary' : 'light'}
            onClick={() => handleTabChange('feed')}
            className="tab-button"
          >
            News Feed
          </Button>
          <Button
            variant={activeTab === 'following' ? 'secondary' : 'light'}
            onClick={() => handleTabChange('following')}
            className="tab-button"
          >
            Following
          </Button>
          
          </div>

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
      <nav className="navbar container fixed-bottom bg-light mt-4 border">
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
