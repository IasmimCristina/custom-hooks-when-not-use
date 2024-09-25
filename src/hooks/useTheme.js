import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext); // Aqui você define a variável context
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { theme, toggleTheme } = context; // Desestruture context aqui
  return { theme, toggleTheme };
};

export default useTheme;
