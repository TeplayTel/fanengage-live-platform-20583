import React, { useState } from 'react';
import './MatchCentre.css';

const MatchCentre = () => {
  const [activeTab, setActiveTab] = useState('match-statistics');

  const renderContent = () => {
    if (activeTab === 'match-statistics') {
      return (
        <div className="stats-content">
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
    // Placeholder for other tabs
    return <div className="tab-content-placeholder">{`Content for ${activeTab.replace('-', ' ')}`}</div>;
  };

  return (
    <div className="match-centre">
      <div className="match-centre-header">
        <div className="team">
          <img src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png" alt="Arsenal" className="team-logo" />
          <span className="team-name">Arsenal</span>
        </div>
        <div className="score-details">
          <span className="score">2 - 1</span>
          <span className="status">FT</span>
        </div>
        <div className="team">
          <img src="https://ssl.gstatic.com/onebox/media/sports/logos/fhg1GDpgqOOewf_AyDfl-A_96x96.png" alt="Chelsea" className="team-logo" />
          <span className="team-name">Chelsea</span>
        </div>
      </div>
       <div className="tabs">
        <button className={`tab ${activeTab === 'key-events' ? 'active' : ''}`} onClick={() => setActiveTab('key-events')}>
          KEY EVENTS
        </button>
        <button className={`tab ${activeTab === 'match-statistics' ? 'active' : ''}`} onClick={() => setActiveTab('match-statistics')}>
          MATCH STATISTICS
        </button>
        <button className={`tab ${activeTab === 'starting-lineups' ? 'active' : ''}`} onClick={() => setActiveTab('starting-lineups')}>
          STARTING LINEUPS
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default MatchCentre;
