import React from 'react';
import './AnalyticsSidebar.css';

const AnalyticsSidebar = () => {
  return (
    <aside className="chat-panel">
      <div className="panel-card">
        <h3>ANALYTICS</h3>
        <div className="analytics-section">
          <h4>Premier League Poll</h4>
          <div className="poll-option">
            <span>Chelsea</span>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            <span>0%</span>
          </div>
          <div className="poll-option">
            <span>Arsenal</span>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            <span>0%</span>
          </div>
          <button className="vote-btn">VOTE</button>
        </div>
        <div className="analytics-section">
          <h4>Timeline</h4>
          <p><strong>GOAL:</strong> 15.8M</p>
        </div>
        <div className="analytics-section">
          <h4>Subs</h4>
          <p><strong>Substitution:</strong> 5.2M</p>
        </div>
        <div className="analytics-section">
          <h4>Possession</h4>
          <p><strong>Team Possession:</strong> 58.2%</p>
        </div>
        <div className="analytics-section">
          <h4>Top Moments</h4>
          <ul className="timeline-list">
            <li>Starting Lineups</li>
            <li>Kick Off</li>
            <li>Havertz Dismissal</li>
            <li>Penalty - 16th</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AnalyticsSidebar;
