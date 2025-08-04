import React from 'react';
import './StreamSelection.css';

const StreamSelection = () => {
  return (
    <div className="stream-selection">
      <button className="stream-btn active">STREAM 1</button>
      <button className="stream-btn active">STREAM 2</button>
      <button className="stream-btn">TWITCH</button>
      <button className="stream-btn">BETSTREAM</button>
      <button className="stream-btn">STREAMGATE</button>
      <button className="stream-btn">LIVE ODDS</button>
      <button className="stream-btn">BLOCKCHAIN</button>
    </div>
  );
};

export default StreamSelection;
