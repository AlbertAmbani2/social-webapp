// src/Sidebar.js
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Bell, Envelope, Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="fixed-left">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">

        <Nav.Link as={Link} to="/Profile">
            <Person size={24} className="mx-4" />
            Profile
          </Nav.Link>
          <Nav.Link href="#">
            <Bell size={24} className="mx-4" />
            Notifications
          </Nav.Link>
          <Nav.Link href="#">
            <Envelope size={24} className="mx-4" />
            Messages
          </Nav.Link>
          {/* Add more links as needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;