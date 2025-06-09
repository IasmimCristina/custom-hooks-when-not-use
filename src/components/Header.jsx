import React from "react";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("Header rendered!");

  return (
    <header className="header">
      <h1>CatApp</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;
