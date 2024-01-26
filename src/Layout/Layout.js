// Layout.js
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-grow-1 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <NavigationBar toggleSidebar={toggleSidebar} />
        {/* Add other content components here */}
      </div>
    </div>
  );
};

export default Layout;

