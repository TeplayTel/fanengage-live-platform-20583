import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import HighlightsCarousel from './components/HighlightsCarousel';
import StatsLeaderboard from './components/StatsLeaderboard';
import ChatPanel from './components/ChatPanel';

// PUBLIC_INTERFACE
function App() {
  // The entire app will use the dark theme defined in App.css
  // based on the design notes.
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <main>
          <VideoPlayer />
          <HighlightsCarousel />
          <StatsLeaderboard />
        </main>
        <ChatPanel />
      </div>
    </div>
  );
}

export default App;
