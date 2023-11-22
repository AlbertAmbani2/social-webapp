// src/App.js
import React, { useState } from 'react';
import Login from './Login';

const Profile = ({ user }) => {
  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">Username: {user.username}</p>
          <p className="card-text">Email: {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ user }) => {
  return (
    <div>
      <Profile user={user} />
      {/* Add additional profile-related components or sections here */}
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      {user ? (
        <ProfileSection user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
