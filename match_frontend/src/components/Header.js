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
        <a href="#live" className="nav-item active" style={{backgroundColor: 'var(--accent-red)'}}>LIVE</a>
        <a href="#hd-streaming" className="nav-item">HD STREAMING</a>
        <a href="#streaming-channels" className="nav-item">STREAMING CHANNELS</a>
        <a href="#premier-league" className="nav-item">PREMIER LEAGUE</a>
      </nav>
      <div className="header-actions">
        <span><i className="fa fa-search"></i></span>
      </div>
    </header>
  );
};

export default Header;
