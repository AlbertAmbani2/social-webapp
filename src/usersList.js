// UsersList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCard = ({ user, onFollowToggle }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', width: '200px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <span>{user.name}</span>
      <button onClick={() => onFollowToggle(user)}>
        {user.isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

const UsersList = ({ currentUser, onFollowToggle }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch a list of users from the JSON Placeholder API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Add an "isFollowing" property to each user based on the currentUser's following list
        const usersWithFollowingStatus = response.data.map(user => ({
          ...user,
          isFollowing: currentUser && currentUser.following && currentUser.following.includes(user.id)
        }));
        setUsers(usersWithFollowingStatus);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentUser]);

  return (
    <div>
      <h2>Users List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onFollowToggle={onFollowToggle} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
