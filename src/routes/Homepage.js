// src/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../navigationBar';
import '../NavigationBar.css';

const HomePage = () => {
  return (
    <Container fluid className="home mt-5">
      <Row>
        {/* Sidebar component */}
        <Col md={3}>
          <NavigationBar />
        </Col>

        {/* Main content */}
        <Col md={6} className="flex-grow-1 mx-auto mt-4">
          <div className="main-content bg-light border px-3 py-4">
            {/* Your main content here */}
            <div className="post">
              <div className="user-info">
                <img src="user-avatar.jpg" alt="User Avatar" className="avatar" />
                <div className="username">Username</div>
              </div>
              <div className="post-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eget massa fermentum sollicitudin.
              </div>
              <div className="post-actions">
                <button className="btn">Like</button>
                <button className="btn">Comment</button>
                <button className="btn">Share</button>
              </div>
            </div>
          </div>
        </Col>

        {/* Additional column for widgets, trending, etc. */}
        <Col md={3}>
          <div className="widgets">
            {/* Widgets or trending topics here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
