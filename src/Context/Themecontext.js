import React, { createContext, useState, useContext } from 'react';

// Define light and dark theme objects
const lightTheme = {
  colors: {
    primary: '#007BFF',
    secondary: '#FFD700',
    background: '#f9f9f9',
    text: '#333',
    button: {
      background: '#007BFF',
      hover: '#0056b3',
      text: '#fff',
    },
    footer: '#007BFF',
    cardBackground: '#fff',
  },
  typography: {
    headingFontSize: '24px',
    bodyFontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    buttonFontSize: '16px',
    largeHeadingFontSize: '36px',
  },
  spacing: {
    padding: '20px',
    margin: '20px',
  },
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  colors: {
    primary: '#1A1A1A',
    secondary: '#FFD700',
    background: '#121212',
    text: '#fff',
    button: {
      background: '#007BFF',
      hover: '#0056b3',
      text: '#fff',
    },
    footer: '#1A1A1A',
    cardBackground: '#333',
  },
  typography: {
    headingFontSize: '24px',
    bodyFontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    buttonFontSize: '16px',
    largeHeadingFontSize: '36px',
  },
  spacing: {
    padding: '20px',
    margin: '20px',
  },
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
};

// Create the ThemeContext
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
