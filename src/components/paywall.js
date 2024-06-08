// src/Paywall.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Paywall = () => {
  const navigate = useNavigate();

  return (
    <div className="paywall">
      <h2>You've reached your free post limit for today!</h2>
      <button onClick={() => navigate('/premium')}>Upgrade to Premium</button>
    </div>
  );
};

export default Paywall;
