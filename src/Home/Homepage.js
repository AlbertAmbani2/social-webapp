// src/HomePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/Navbars/navigationBar';
import Feed from './Feed';
import Following from '../hooks/Following';

const HomePage = ({ incrementPostCount, user, isPremium }) => {
  return (
    <Container fluid className="home mt-5">
      <Row>
        {/* Sidebar component */}
        <Col md={3}>
          <NavigationBar />
          {/* <NavbarHook /> */}
        </Col>

        {/* Feed component */}
        <Col md={6}>
          <Feed
            user={user}
            isPremium={isPremium}
            incrementPostCount={incrementPostCount}
          />
        </Col>
        
        <Col md={6}>
        <Following user={user} 
        followedUsers={user ? user.followedUsers : []} />
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
