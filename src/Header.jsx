import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={theme}>
      <h1>Hokejové mistrovství světa 2024</h1>
      <button onClick={toggleTheme}>
        Přepnout na {theme === 'light' ? 'tmavý' : 'světlý'} režim
      </button>
    </header>
  );
};

export default Header;
