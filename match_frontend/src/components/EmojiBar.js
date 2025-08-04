import React from 'react';
import './EmojiBar.css';

const EmojiBar = () => {
  const emojis = ['👍', '🔥', '👏', '❤️', '😂', '😮', '⚽️', '🏆'];

  return (
    <div className="emoji-bar">
      {emojis.map((emoji, index) => (
        <button key={index} className="emoji-button">
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiBar;
