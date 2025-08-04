import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="match-title">
        <h1>Arsenal vs Chelsea</h1>
        <span className="live-badge">LIVE</span>
      </div>
    </header>
  );
};

export default Header;
