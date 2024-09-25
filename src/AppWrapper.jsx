// src/components/AppWrapper.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';


const AppWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      {children}
    </div>
  );
};

export default AppWrapper;
