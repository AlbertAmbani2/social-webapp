// src/Feed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Feed = ({ user, isPremium, incrementPostCount }) => {
  const [posts, setPosts] = useState([]);
  const [viewedPosts, setViewedPosts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(result.data);
    };

    fetchPosts();
  }, []);

  const handleViewPost = () => {
    if (!isPremium && viewedPosts >= 20) {
      navigate('/paywall');
    } else {
      setViewedPosts(viewedPosts + 1);
      incrementPostCount();
    }
  };

  return (
    <div className="feed">
      {posts.slice(0, isPremium ? 100 : 20).map(post => (
        <div key={post.id} className="post" onClick={handleViewPost}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
