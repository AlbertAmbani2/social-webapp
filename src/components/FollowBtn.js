// src/FollowBtn.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FollowBtn = ({ isFollowing, onToggleFollow }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFollowToggle = async () => {
    if (isProcessing) {
      return;
    }

    setIsProcessing(true);

    // Simulate an API call for following/unfollowing
    // In a real application, you would make an API request to update the follow status
    // and handle the response accordingly.

    // For this example, we'll just wait for 1 second to simulate an asynchronous operation.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update the follow status
    onToggleFollow();

    // Reset the processing state
    setIsProcessing(false);
  };

  return (
    <Button variant={isFollowing ? 'secondary' : 'primary'} onClick={handleFollowToggle} disabled={isProcessing}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};

export default FollowBtn;
