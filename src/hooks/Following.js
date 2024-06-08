import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Following = ({ user, followedUsers = [] }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (followedUsers && followedUsers.length > 0) {
          setPosts(result.data.filter(post => followedUsers.includes(post.userId)));
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [followedUsers]);

  return (
    <div className="following">
      <h2>Following</h2>
      {posts.length === 0 ? (
        <p>No posts from followed users.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Following;
