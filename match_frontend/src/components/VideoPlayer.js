import React from 'react';
import EmojiBar from './EmojiBar';
import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div className="video-player-container">
      <div className="video-placeholder">
        {/* In a real app, a <video> or <iframe> tag would go here */}
        <p>Video Player Placeholder</p>
      </div>
      <EmojiBar />
    </div>
  );
};

export default VideoPlayer;
