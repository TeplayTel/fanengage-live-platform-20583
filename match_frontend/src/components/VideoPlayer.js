import React from 'react';
import EmojiBar from './EmojiBar';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-player-container">
      <div className="video-overlay">
        <div className="match-info">
          <span>PREMIER LEAGUE</span>
          <div className="score">ARS 2 - 1 CHE</div>
        </div>
        <div className="time">81:05</div>
      </div>
      <div className="video-placeholder">
        {/* In a real app, a <video> or <iframe> tag would go here */}
      </div>
      <EmojiBar />
    </div>
  );
};

export default VideoPlayer;
