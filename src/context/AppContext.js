// context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();  // Named export

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
