// Sidebar.js
import React from 'react';
//import { Nav, Navbar, Button } from 'react-bootstrap';
import { HouseDoor, Bell, Envelope, Person } from 'react-bootstrap-icons';
//import { Link } from 'react-router-dom';
//import './sidebar.css';

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HouseDoor size={24} className="mx-4" />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon:  <Person size={24} className="mx-4" />,
    cName: "nav-text",
  },
  {
    title: "Notification",
    path: "/notification",
    icon:  <Bell size={24} className="mx-4" />,
    cName: "nav-text",
  },

  {
    title: "Messages",
    path: "/messages",
    icon: <Envelope size={24} className="mx-4" />,
    cName: "nav-text",
  },
];

export default SidebarData;


