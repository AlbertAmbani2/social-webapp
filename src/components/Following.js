// Following.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Following = ({ userId }) => {
  const [followingUsers, setFollowingUsers] = useState([]);
  const [followingData, setFollowingData] = useState([]);

  useEffect(() => {
    const storedFollowingUsers = JSON.parse(localStorage.getItem('followingUsers')) || [];
    setFollowingUsers(storedFollowingUsers);

    fetchFollowingData(storedFollowingUsers);

    return () => {
      localStorage.setItem('followingUsers', JSON.stringify(followingUsers));
    };
  }, [followingUsers]);

  const fetchFollowingData = async (users) => {
    try {
      const dataPromises = users.map(async (user) => {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}`);
        const userPostsResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);

        return {
          user: userResponse.data,
          posts: userPostsResponse.data,
        };
      });

      const allData = await Promise.all(dataPromises);
      setFollowingData(allData);
    } catch (error) {
      console.error('Error fetching following data:', error);
    }
  };

  const toggleFollowUser = async (userToFollow) => {
    const isFollowing = followingUsers.some((user) => user.id === userToFollow.id);

    if (isFollowing) {
      const updatedFollowingUsers = followingUsers.filter((user) => user.id !== userToFollow.id);
      setFollowingUsers(updatedFollowingUsers);
    } else {
      const updatedFollowingUsers = [...followingUsers, userToFollow];
      setFollowingUsers(updatedFollowingUsers);
    }
  };

  return (
    <div>
      <h2>Following</h2>
      <ul>
        {followingData.map(({ user, posts }) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <h4>Posts:</h4>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div>
        <h3>Users to Follow</h3>
        <ul>
          {[
            { id: 1, name: 'User 1', username: 'user1' },
            { id: 2, name: 'User 2', username: 'user2' },
            // ... add more users as needed
          ].map((user) => (
            <li key={user.id}>
              {user.name}{' '}
              <button onClick={() => toggleFollowUser(user)}>
                {followingUsers.some((followedUser) => followedUser.id === user.id) ? 'Unfollow' : 'Follow'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Following;
