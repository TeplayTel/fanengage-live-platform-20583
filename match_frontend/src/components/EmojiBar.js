import React from 'react';
import './EmojiBar.css';

const EmojiBar = () => {
  const emojis = [
    { emoji: '❤️', count: '1.2k' },
    { emoji: '😂', count: '873' },
    { emoji: '👍', count: '3.4k' },
    { emoji: '🔥', count: '5.1k' },
    { emoji: '😮', count: '421' },
    { emoji: '😡', count: '102' },
  ];

  return (
    <div className="emoji-bar">
      {emojis.map((item, index) => (
        <button key={index} className="emoji-button">
          <span className="emoji">{item.emoji}</span>
          <span className="emoji-count">{item.count}</span>
        </button>
      ))}
    </div>
  );
};

export default EmojiBar;
