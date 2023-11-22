// src/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/150"
            alt={`${user.name}'s profile`}
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <div className="mb-3">
            <h2>{user.name}</h2>
            <p className="text-muted">@{user.username}</p>
            <p>{user.email}</p>
            {/* Add more user details as needed */}
          </div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">My Posts</h5>
          {/* Add logic to fetch and display user's posts here */}
          <p className="card-text">This is where your posts would appear.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;