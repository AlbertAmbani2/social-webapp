// src/Profile.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts';
import FollowBtn from './FollowBtn';

const Profile = ({ user, onLogout }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Fetch user's posts from the API or your data source
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const data = await response.json();
        setUserPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    fetchUserPosts();
  }, [user.id]);

  const handleLogout = () => {
    // Perform any additional log-out actions if needed
    // For now, just call the onLogout function to reset the user state
    onLogout();
  };

  const handleToggleFollow = () => {
    // Implement the logic for follow/unfollow here
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Link to="/">
            {/* Add an arrow or any desired back icon */}
            <span>&larr;</span> Back
          </Link>
        </div>
        <div className="col-md-8">
          <div className="mb-3">
            <h2>{user.name}</h2>
            <p className="text-muted">@{user.username}</p>
            <p>{user.email}</p>
            {/* Add more user details as needed */}

            {/* Subscribe to Premium button */}
            {!user.isPremium && (
              <Link to="/premium-membership">
                <button className="btn btn-success">Subscribe to Premium</button>
              </Link>
            )}
          </div>

          {/* FollowBtn component */}
          <FollowBtn isFollowing={false} onToggleFollow={handleToggleFollow} />
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">My Posts</h5>
          {/* Display user's posts */}
          {userPosts.length > 0 ? (
            <Posts posts={userPosts} />
          ) : (
            <p className="card-text">No posts found.</p>
          )}
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
