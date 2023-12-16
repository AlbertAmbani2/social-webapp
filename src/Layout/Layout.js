// Layout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ user, isSidebarOpen, children }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={user ? 3 : 12} lg={user ? 2 : 12} className={`p-0 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          {/* Sidebar */}
          {user && children[0]}
        </Col>

        <Col xs={12} md={user ? 9 : 12} lg={user ? 10 : 12} className="p-0">
          {/* Main Content including Navbar */}
          {children[1]}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
