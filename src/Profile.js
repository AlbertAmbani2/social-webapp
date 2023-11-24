// src/Profile.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import Posts from './Posts';
import UsersList from './usersList';

const Profile = ({ user, onLogout }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user's posts from the API or your data source
    const fetchUserPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const data = await response.json();
        setUserPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      } finally {
        setLoading(false);
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
          <ArrowLeft size={24} /> 
        </Link>
          <div className="mt-3">
        <button className="btn btn-outline-danger position-absolute top-0 end-0 mt-4 mr-4 " onClick={handleLogout}>
          Log Out
        </button>
      </div>
        </div>
        <div className="col-md-8">
          <div className="mb-3">
            <h2>{user.name}</h2>
            <p className="text-muted">@{user.username}</p>
            <p>{user.email}</p>
            {/* Display premium status */}
            {user.isPremium ? (
              <p className="text-success">Premium User</p>
            ) : (
              <Link to="/premium-membership">
                <button className="btn btn-success">Subscribe to Premium</button>
              </Link>
            )}
          </div>

          
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">My Posts</h5>
          {/* Display user's posts or loading message */}
          <i><UsersList currentUser={user} onFollowToggle={handleToggleFollow} /></i>
          {loading ? (
            <p className="card-text">Loading posts...</p>
          ) : userPosts.length > 0 ? (
            <Posts posts={userPosts} />
          ) : (
            <p className="card-text">No posts found.</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Profile;