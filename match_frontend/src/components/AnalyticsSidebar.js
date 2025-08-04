import React from 'react';
import './AnalyticsSidebar.css';

const StatRow = ({ label, homeValue, awayValue }) => {
    const total = homeValue + awayValue;
    const homePercent = total > 0 ? (homeValue / total) * 100 : 0;
    const awayPercent = total > 0 ? (awayValue / total) * 100 : 0;

    return (
        <div className="stat-row-item">
            <div className="stat-row-header">
                <span className="stat-value-home">{homeValue}</span>
                <p className="stat-label">{label}</p>
                <span className="stat-value-away">{awayValue}</span>
            </div>
            <div className="stat-row-bar">
                <div className="stat-bar-fill home" style={{ width: `${homePercent}%` }}></div>
                <div className="stat-bar-fill away" style={{ width: `${awayPercent}%` }}></div>
            </div>
        </div>
    );
};


const AnalyticsSidebar = () => {
  return (
    <aside className="analytics-sidebar">
      <div className="sidebar-header">
        <div className="tabs">
          <button className="tab active">Analytics</button>
          <button className="tab">Chat</button>
        </div>
        <span className="live-badge-sidebar">LIVE</span>
      </div>

      <div className="stats-card">
        <div className="stats-header">
          <h3>Statistics</h3>
          <select className="stats-dropdown">
            <option>1st half</option>
            <option>2nd half</option>
          </select>
        </div>

        <div className="stats-content">
            <div className="possession-stat">
                <p className="stat-label centered">Possession</p>
                <div className="possession-bar-group">
                    <div className="possession-bar-row">
                        <span className="team-label">CHELSEA</span>
                        <div className="progress-bar-container">
                            <div className="progress-bar home" style={{ width: '45%' }}></div>
                        </div>
                        <span className="percentage-label">45%</span>
                    </div>
                    <div className="possession-bar-row">
                        <span className="team-label">ARSENAL</span>
                        <div className="progress-bar-container">
                            <div className="progress-bar away" style={{ width: '55%' }}></div>
                        </div>
                        <span className="percentage-label">55%</span>
                    </div>
                </div>
            </div>

            <div className="divider"></div>
            <StatRow label="Shots" homeValue={3} awayValue={7} />
            <div className="divider"></div>
            <StatRow label="Cards" homeValue={1} awayValue={2} />
            <div className="divider"></div>
            <StatRow label="Corners" homeValue={2} awayValue={4} />
            <div className="divider"></div>
            <StatRow label="Penalties" homeValue={0} awayValue={1} />
        </div>
      </div>
    </aside>
  );
};

export default AnalyticsSidebar;
