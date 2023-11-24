// src/components/PremiumMembership.js
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const PremiumMembership = () => {
  const { user, setUser } = useContext(AppContext);

  const handleSubscribe = () => {
    // Mock subscription logic, set the user's status to premium
    setUser({ ...(user || {}), isPremium: true }); // Ensure user is not null
  };

  return (
    <div>
      <h2>Premium Membership</h2>
      <p>Unlock premium features by subscribing now!</p>
      {user && !user.isPremium && (
        <Button variant="success" onClick={handleSubscribe}>
          Subscribe to Premium
        </Button>
      )}
      {user && user.isPremium && <p>You are a Premium Member!</p>}
    </div>
  );
};

export default PremiumMembership;
