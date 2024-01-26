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

  const showSidebar = () => setSidebar(!sidebar);

  const { activeTab, handleTabChange } = useTabs('feed');

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
    <div className="container d-flex flex-column h-100">
      <>
        <IconContext.Provider value={{ color: 'undefined' }}>
          <div className="navbar">
            <Link to="#" >
              <Button variant="light" className="menu-bars" onClick={showSidebar}>
                ☰
              </Button>
            </Link>
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
      <nav className="navbar container fixed-bottom navbar-light bg-light mt-4">
        <ul className="navbar-nav flex-row justify-content-between w-100">
          <li className="nav-item">
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
      </nav>
    </div>
  );
}

export default NavigationBar;
