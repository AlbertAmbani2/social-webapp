import React from 'react';
import { IconButton, Tabs, Tab } from '@mui/material';
import { IoMenu } from "react-icons/io5";

function NavbarHook({ activeTab, handleTabChange, showSidebar }) {
  return (
    <Tabs
      value={activeTab}
      className="tabs"
      onChange={handleTabChange}
    >
      <Tab
        label="News Feed"
        value="feed"
        className={`tab ${activeTab === 'feed' ? 'active' : ''}`}
        sx={{
          textTransform: 'none',
        }}
      />
      <Tab
        label="Following"
        value="following"
        className={`tab ${activeTab === 'following' ? 'active' : ''}`}
        sx={{
          textTransform: 'none',
        }}
      />
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={showSidebar}
      >
        <IoMenu />
      </IconButton>
    </Tabs>
  );
}

export default NavbarHook;
