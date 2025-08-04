import React from 'react';
import './ChatPanel.css';

const ChatPanel = () => {
  return (
    <aside className="chat-panel">
      <div className="panel-card">
        <h3>Chat</h3>
        <div className="chat-content">
          <div className="chat-message">
            <span className="chat-user">ArsenalFan11:</span>
            <span className="chat-text">Come on you Gunners! 🔥</span>
          </div>
          <div className="chat-message">
            <span className="chat-user">CFC_Dave:</span>
            <span className="chat-text">What a save! 😮</span>
          </div>
          <div className="chat-message">
            <span className="chat-user">Neutral_Neto:</span>
            <span className="chat-text">This game is intense!</span>
          </div>
        </div>
      </div>
      <div className="panel-card">
        <h3>Timeline</h3>
        <ul className="timeline-list">
          <li><strong>Penalty - 16th</strong></li>
          <li><strong>Havertz Dismissal</strong></li>
          <li><strong>Kick Off</strong></li>
          <li><strong>Starting Lineups</strong></li>
        </ul>
      </div>
      <div className="panel-card">
        <h3>Analytics</h3>
         <p><strong>Possession:</strong> 58.2%</p>
         <p><strong>Goal Probability:</strong> 15.8M</p>
         <p><strong>Substitutions:</strong> 5.2M</p>
      </div>
    </aside>
  );
};

export default ChatPanel;
