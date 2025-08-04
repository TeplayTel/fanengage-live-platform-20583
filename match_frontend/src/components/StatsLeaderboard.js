import React from 'react';
import './StatsLeaderboard.css';

const StatsLeaderboard = () => {
  return (
    <div className="stats-leaderboard">
      <div className="tabs">
        <button className="tab active">Match Stats</button>
        <button className="tab">Leaderboard</button>
      </div>
      <div className="tab-content">
        <p>Statistics or leaderboard content will be displayed here.</p>
      </div>
    </div>
  );
};

export default StatsLeaderboard;
