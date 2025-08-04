import React, { useState } from 'react';
import './StatsLeaderboard.css';

const StatsLeaderboard = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const renderContent = () => {
    if (activeTab === 'stats') {
      return (
        <div className="stats-content">
          <div className="match-center-header">
            <img src="https://via.placeholder.com/40x40.png?text=ARS" alt="Arsenal" className="team-logo" />
            <span className="score-display">2 - 1</span>
            <img src="https://via.placeholder.com/40x40.png?text=CHE" alt="Chelsea" className="team-logo" />
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <span>8</span>
              <p>Shots on Target</p>
              <span>3</span>
            </div>
            <div className="stat-item">
              <span>15</span>
              <p>Total Shots</p>
              <span>9</span>
            </div>
            <div className="stat-item">
              <span>58%</span>
              <p>Possession</p>
              <span>42%</span>
            </div>
             <div className="stat-item">
              <span>489</span>
              <p>Passes</p>
              <span>356</span>
            </div>
            <div className="stat-item">
              <span>88%</span>
              <p>Pass Accuracy</p>
              <span>82%</span>
            </div>
             <div className="stat-item">
              <span>12</span>
              <p>Fouls</p>
              <span>9</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="leaderboard-content">
        <ul className="leaderboard-list">
          <li><span>1.</span> <strong>FanaticUser_99</strong> <span>🔥 1.2M</span></li>
          <li><span>2.</span> <strong>ChelseaFan_01</strong> <span>😡 980k</span></li>
          <li><span>3.</span> <strong>Gunner4Life</strong> <span>❤️ 850k</span></li>
          <li><span>4.</span> <strong>SoccerMom_US</strong> <span>😂 720k</span></li>
          <li><span>5.</span> <strong>GlobalFan_22</strong> <span>😮 610k</span></li>
        </ul>
      </div>
    );
  };

  return (
    <div className="stats-leaderboard">
      <div className="tabs">
        <button className={`tab ${activeTab === 'stats' ? 'active' : ''}`} onClick={() => setActiveTab('stats')}>
          Match Stats
        </button>
        <button className={`tab ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
          Leaderboard
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default StatsLeaderboard;
