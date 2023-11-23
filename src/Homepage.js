// src/HomePage.js
import React from 'react';
import NavigationBar from './navigationBar';


const HomePage = ({ toggleSidebar }) => {
  // Add any additional state or logic needed for the homepage

  return (
     <div className="container mt-5">
      <NavigationBar />
      <div className="row">
       
        <div className="col-md-9">
          {/* Main content of the home page */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
