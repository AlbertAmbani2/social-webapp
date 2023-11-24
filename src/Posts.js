// src/Posts.js
import React, { useEffect, useState } from 'react';

const Posts = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // JSONPlaceholder API endpoint for posts.
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const posts = await response.json();
        setUserPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div>
      <h3 className="mb-3">Posts</h3>
      {userPosts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
