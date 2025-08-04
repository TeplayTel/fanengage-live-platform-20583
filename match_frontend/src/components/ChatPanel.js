import React from 'react';
import './ChatPanel.css';

const ChatPanel = () => {
  return (
    <aside className="chat-panel">
      <div className="panel-card">
        <h3>Chat</h3>
        <div className="chat-content">
          <p>Chat messages will appear here...</p>
        </div>
      </div>
      <div className="panel-card">
        <h3>Analysis</h3>
        <p>Analysis content goes here.</p>
      </div>
      <div className="panel-card">
        <h3>Timeline</h3>
        <p>Match timeline will be shown here.</p>
      </div>
    </aside>
  );
};

export default ChatPanel;
