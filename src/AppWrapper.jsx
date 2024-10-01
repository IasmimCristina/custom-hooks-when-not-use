import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const AppWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`app-wrapper ${theme}`}>{children}</div>;
};

export default AppWrapper;
