import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  console.log("Header rendered!");

  console.log('Header rendered!');
  return (
    <header className="header">
      <h1>CatApp</h1>
      <ThemeToggleButton /> {/* Using the new component here */}
    </header>
  );
};

export default Header;
