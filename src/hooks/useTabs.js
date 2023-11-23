// src/hooks/useTabs.js
import { useState } from 'react';

const useTabs = (initialTab) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange,
  };
};

export default useTabs;
