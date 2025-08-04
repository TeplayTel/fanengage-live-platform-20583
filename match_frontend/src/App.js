import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import MatchCentre from './components/MatchCentre';
import MoreMatches from './components/MoreMatches';
import AnalyticsSidebar from './components/AnalyticsSidebar';

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
          <MatchCentre />
          <MoreMatches />
        </main>
        <AnalyticsSidebar />
      </div>
    </div>
  );
}

export default App;
