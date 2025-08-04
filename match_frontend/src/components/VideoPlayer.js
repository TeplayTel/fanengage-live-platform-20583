import React from 'react';
import EmojiBar from './EmojiBar';
import './VideoPlayer.css';

// PUBLIC_INTERFACE
const VideoPlayer = () => {
  // Using a sample YouTube video ID for Arsenal vs Chelsea match
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with actual match video ID
  
  return (
    <div className="video-player-container">
      <div className="video-overlay">
        <div className="match-info">
          <span className="league-label">PREMIER LEAGUE</span>
          <div className="score">ARS 2 - 1 CHE</div>
        </div>
        <div className="match-time">
          <span className="time-label">LIVE</span>
          <span className="time">81:05</span>
        </div>
      </div>
      
      <div className="youtube-container">
        <iframe
          className="youtube-player"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1`}
          title="Arsenal vs Chelsea Live Match"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="video-loading-overlay">
          <div className="loading-spinner"></div>
          <span>Loading match stream...</span>
        </div>
      </div>
      
      <EmojiBar />
      
      <div className="video-controls">
        <button className="control-btn volume-btn" aria-label="Toggle Volume">
          <i className="fa fa-volume-up"></i>
        </button>
        <button className="control-btn fullscreen-btn" aria-label="Toggle Fullscreen">
          <i className="fa fa-expand"></i>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
