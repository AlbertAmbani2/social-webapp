// src/HomePage.js
import React from 'react';
import NavigationBar from './navigationBar';
import Sidebar from './components/sidebar/Sidebar';

const HomePage = ({ toggleSidebar }) => {
  // Add any additional state or logic needed for the homepage

  return (
    <div className="container-fluid mt-5">

      <div className="row">
        {/* Sidebar component */}
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-6">
         
          {/* NavigationBar component */}
         <NavigationBar />
          
        </div>

        <div className="col-md-3">
          {/* Additional column for widgets, trending, etc. */}
          <div className="bg-light p-4 rounded">
            <h2 className="mb-4">Trending</h2>
            {/* Add your additional content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
