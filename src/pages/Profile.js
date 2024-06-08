import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import Posts from '../components/Posts';
import UsersList from '../components/usersList';

const Profile = ({ user, onLogout }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('posts');

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

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="mb-3 border rounded p-3 position-relative">
            <Link to="/">
              <ArrowLeft size={24} />
            </Link>
            <button className="btn btn-outline-danger position-absolute top-0 end-0 mt-2 ms-2" onClick={handleLogout}>
              Log Out
            </button>
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

      <div className="row justify-content-center">
        <div className="col-md-8 border position-relative">
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs
            value={activeTab}
            className="tabs"
            onChange={handleTabChange}
            sx={{ borderBottom: '1px solid #e1e8ed', }}
          >
            <Tab
              label="Posts" value="posts" className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
              sx={{
                textTransform: 'none',
                color: '#000000',
                '&.Mui-selected': {
                  color: '#1976D2',
                },
              }}
            />
            <Tab
              label="Followers" value="followers" className={`tab ${activeTab === 'followers' ? 'active' : ''}`}
              sx={{
                textTransform: 'none',
                color: '#000000',
                '&.Mui-selected': {
                  color: '#1976D2',
                },
              }}
            />
            <Tab
              label="Following" value="following" className={`tab ${activeTab === 'following' ? 'active' : ''}`}
              sx={{
                textTransform: 'none',
                color: '#000000',
                '&.Mui-selected': {
                  color: '#1976D2',
                },
              }}
            />
          </Tabs>

            <Typography component="div" role="tabpanel" sx={{ p: 3 }}>
              {activeTab === 'posts' && (
                <div className=" mt-0 start-0">
                  <div className="card-body">
                    <h5 className="card-title">My Posts</h5>
                    {/* Display user's posts or loading message */}
                    <UsersList currentUser={user} onFollowToggle={handleToggleFollow} />
                    {loading ? (
                      <p className="card-text">Loading posts...</p>
                    ) : userPosts.length > 0 ? (
                      <Posts posts={userPosts} />
                    ) : (
                      <p className="card-text">No posts found.</p>
                    )}
                  </div>
                </div>
              )}
              {activeTab === 'followers' && (
                <div className="mt-0">
                  <div className="card-body">
                    <h5 className="card-title">Followers</h5>
                    {/* Display user's followers */}
                    <p>List of followers...</p>
                  </div>
                </div>
              )}
              {activeTab === 'following' && (
                <div className="mt-0">
                  <div className="card-body">
                    <h5 className="card-title">Following</h5>
                    {/* Display user's following */}
                    <p>List of following...</p>
                  </div>
                </div>
              )}
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
