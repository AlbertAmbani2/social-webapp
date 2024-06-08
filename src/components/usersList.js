import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCard = ({ user, onFollowToggle, onBlockToggle }) => {
  const handleFollowToggle = () => {
    onFollowToggle(user.id); // Pass the user id to the parent component
  };

  const handleBlockToggle = () => {
    onBlockToggle(user.id); // Pass the user id to the parent component
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', width: '200px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <span>{user.name}</span>
      <button onClick={handleFollowToggle}>
        {user.isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <button onClick={handleBlockToggle}>
        {user.isBlocked ? 'Unblock' : 'Block'}
      </button>
    </div>
  );
};

const UsersList = ({ currentUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersWithFollowingStatus = response.data.map(user => ({
          ...user,
          isFollowing: currentUser && currentUser.following && currentUser.following.includes(user.id),
          isBlocked: currentUser && currentUser.blocked && currentUser.blocked.includes(user.id)
        }));
        setUsers(usersWithFollowingStatus);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [currentUser]);

  const updateFollowingList = (userId, isFollowing) => {
    const updatedUser = users.find(user => user.id === userId);
    updatedUser.isFollowing = isFollowing;
    setUsers([...users]); // Update state
  };

  const handleFollowToggle = (userId) => {
    const user = users.find(user => user.id === userId);
    const isFollowing = !user.isFollowing;
    updateFollowingList(userId, isFollowing);
  };

  const handleBlockToggle = (userId) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <i><h6>Users List</h6></i>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onFollowToggle={handleFollowToggle} onBlockToggle={handleBlockToggle} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
