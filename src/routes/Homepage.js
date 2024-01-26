// src/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../navigationBar';
import '../NavigationBar.css';
//import Sidebar from './components/sidebar/Sidebar';

const HomePage = () => {
  return (
    <Container fluid className="home mt-5">
      <Row>
        {/* Sidebar component 
        <Col md={3}>
          <Sidebar />
        </Col>*/}
        

        {/* Main content */}
        <Col md={6}>
          {/* NavigationBar component */}
          <NavigationBar />

        </Col>

        {/* Additional column for widgets, trending, etc. */}
        <Col md={3}>
          <div className="bg-light p-4 rounded">
            <h2 className="mb-4">Trending</h2>
            {/* Add your additional content here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
