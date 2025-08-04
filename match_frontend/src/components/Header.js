import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="match-title">
        <h1>Arsenal vs Chelsea</h1>
        <span className="live-badge">LIVE</span>
      </div>
      <nav className="main-nav">
        <a href="#live" className="nav-item active">Live updating</a>
        <a href="#breakdown" className="nav-item">Advanced breakdown</a>
      </nav>
      <div className="header-actions">
        {/* Placeholder for icons */}
        <span>🔍</span>
      </div>
    </header>
  );
};

export default Header;
