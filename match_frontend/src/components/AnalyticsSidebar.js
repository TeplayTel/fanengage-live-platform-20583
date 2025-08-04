import React, { useState } from 'react';
import './AnalyticsSidebar.css';

// Formation data for 4-4-2 layout
const formationData = {
  '4-4-2': [
    [{ name: 'Goalkeeper', number: '1', position: 'GK' }],
    [
      { name: 'Defender', number: '2', position: 'RB' },
      { name: 'Defender', number: '5', position: 'CB' },
      { name: 'Defender', number: '6', position: 'CB' },
      { name: 'Defender', number: '3', position: 'LB' }
    ],
    [
      { name: 'Midfielder', number: '8', position: 'RM' },
      { name: 'Midfielder', number: '4', position: 'CM' },
      { name: 'Midfielder', number: '10', position: 'CM' },
      { name: 'Midfielder', number: '11', position: 'LM' }
    ],
    [
      { name: 'Forward', number: '9', position: 'ST' },
      { name: 'Forward', number: '7', position: 'ST' }
    ]
  ]
};

// Statistics data
const statsData = [
  { category: 'Possession', homeValue: '45%', awayValue: '55%' },
  { category: 'Shots', homeValue: '8', awayValue: '12' },
  { category: 'Shots on Target', homeValue: '3', awayValue: '7' },
  { category: 'Passes', homeValue: '356', awayValue: '489' },
  { category: 'Pass Accuracy', homeValue: '82%', awayValue: '88%' },
  { category: 'Fouls', homeValue: '12', awayValue: '9' },
  { category: 'Corners', homeValue: '4', awayValue: '6' },
  { category: 'Offsides', homeValue: '2', awayValue: '1' }
];

// Timeline data
const timelineData = [
  { type: 'goal', label: 'Goal', value: '15.8M', progress: 75 },
  { type: 'substitution', label: 'Substitution', value: '5.2M', progress: 40 },
  { type: 'possession', label: 'Team Possession', value: '58.2%', progress: 58 }
];

// Top moments data
const momentsData = [
  { text: 'Starting Lineups', progress: 85 },
  { text: 'Kick Off', progress: 92 },
  { text: 'Havertz Dismissal', progress: 68 },
  { text: 'Penalty - 16th', progress: 45 },
  { text: 'Goal - Arsenal', progress: 78 },
  { text: 'Yellow Card', progress: 35 }
];

const PlayerCard = ({ player }) => (
  <div className="player-card">
    <div className="player-avatar">
      {player.number}
    </div>
    <div className="player-name" title={player.name}>
      {player.name.split(' ')[0]}
    </div>
  </div>
);

const FormationView = ({ formation = '4-4-2' }) => {
  const players = formationData[formation] || formationData['4-4-2'];
  
  return (
    <div className="formation-field">
      {players.map((row, rowIndex) => (
        <div key={rowIndex} className="formation-row">
          {row.map((player, playerIndex) => (
            <PlayerCard key={`${rowIndex}-${playerIndex}`} player={player} />
          ))}
        </div>
      ))}
    </div>
  );
};

const StatisticsTable = ({ stats }) => (
  <table className="stats-table">
    <thead>
      <tr className="stats-header-row">
        <th>Arsenal</th>
        <th>Statistic</th>
        <th>Chelsea</th>
      </tr>
    </thead>
    <tbody>
      {stats.map((stat, index) => (
        <tr key={index} className="stats-data-row">
          <td className="stat-value">{stat.homeValue}</td>
          <td>{stat.category}</td>
          <td className="stat-value">{stat.awayValue}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const PremierLeaguePoll = () => {
  const [pollData] = useState([
    { team: 'Chelsea', percentage: 0 },
    { team: 'Arsenal', percentage: 0 }
  ]);

  return (
    <div className="poll-card">
      <div className="section-header">
        <span>Premier League Poll</span>
      </div>
      
      <select className="poll-dropdown">
        <option>Premier League</option>
        <option>Championship</option>
        <option>Europa League</option>
      </select>
      
      <div className="poll-options">
        {pollData.map((option, index) => (
          <div key={index} className="poll-option">
            <span className="poll-team-name">{option.team}</span>
            <div className="poll-progress-container">
              <div 
                className="poll-progress-bar" 
                style={{ width: `${option.percentage}%` }}
              ></div>
            </div>
            <span className="poll-percentage">{option.percentage}%</span>
          </div>
        ))}
      </div>
      
      <button className="vote-button">VOTE</button>
    </div>
  );
};

const Timeline = ({ items }) => (
  <div className="timeline-card">
    <div className="section-header">
      <span>Timeline</span>
    </div>
    
    <div className="timeline-items">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-icon ${item.type}`}></div>
          <span className="timeline-label">{item.label}</span>
          <div className="timeline-progress-container">
            <div 
              className="timeline-progress-bar" 
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
          <span className="timeline-value">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const TopMoments = ({ moments }) => (
  <div className="moments-card">
    <div className="section-header">
      <span>Top Moments</span>
    </div>
    
    <div className="moments-list">
      {moments.map((moment, index) => (
        <div key={index} className="moment-item">
          <div className="moment-icon"></div>
          <span className="moment-text">{moment.text}</span>
          <div className="moment-progress-container">
            <div 
              className="moment-progress-bar" 
              style={{ width: `${moment.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ChartsVisualization = () => (
  <div className="charts-card">
    <div className="section-header">
      <span>Performance Charts</span>
    </div>
    
    <div className="mini-chart">
      Possession Over Time
    </div>
    
    <div className="mini-chart">
      Shot Accuracy
    </div>
  </div>
);

// PUBLIC_INTERFACE
const AnalyticsSidebar = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [selectedFormation, setSelectedFormation] = useState('4-4-2');

  const renderAnalyticsContent = () => (
    <div className="sidebar-content">
      {/* Match Info */}
      <div className="match-info-card">
        <div className="match-teams">
          <div className="team-info">
            <img 
              src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png" 
              alt="Arsenal" 
              className="team-logo" 
            />
            <span className="team-name">Arsenal</span>
          </div>
          <div className="match-score">2 - 1</div>
          <div className="team-info">
            <img 
              src="https://ssl.gstatic.com/onebox/media/sports/logos/fhg1GDpgqOOewf_AyDfl-A_96x96.png" 
              alt="Chelsea" 
              className="team-logo" 
            />
            <span className="team-name">Chelsea</span>
          </div>
        </div>
        <div className="match-time">81:05 - Full Time</div>
      </div>

      {/* Formation */}
      <div className="formation-card">
        <div className="section-header">
          <span>Formation</span>
          <select 
            className="formation-dropdown"
            value={selectedFormation}
            onChange={(e) => setSelectedFormation(e.target.value)}
          >
            <option value="4-4-2">4-4-2</option>
            <option value="4-3-3">4-3-3</option>
            <option value="3-5-2">3-5-2</option>
          </select>
        </div>
        <FormationView formation={selectedFormation} />
      </div>

      {/* Statistics */}
      <div className="stats-card">
        <div className="section-header">
          <span>Match Statistics</span>
        </div>
        <StatisticsTable stats={statsData} />
      </div>

      {/* Premier League Poll */}
      <PremierLeaguePoll />

      {/* Timeline */}
      <Timeline items={timelineData} />

      {/* Top Moments */}
      <TopMoments moments={momentsData} />

      {/* Charts */}
      <ChartsVisualization />
    </div>
  );

  const renderChatContent = () => (
    <div className="sidebar-content">
      <div className="match-info-card">
        <div className="section-header">
          <span>Live Chat</span>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px', 
          color: 'var(--text-muted)',
          fontStyle: 'italic' 
        }}>
          Chat functionality coming soon...
        </div>
      </div>
    </div>
  );

  return (
    <aside className="analytics-sidebar">
      {/* Header with Tabs */}
      <div className="sidebar-header">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
          <button 
            className={`tab ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            Chat
          </button>
        </div>
        <span className="live-badge-sidebar">LIVE</span>
      </div>

      {/* Content */}
      {activeTab === 'analytics' ? renderAnalyticsContent() : renderChatContent()}
    </aside>
  );
};

export default AnalyticsSidebar;
