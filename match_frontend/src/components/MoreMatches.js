import React from 'react';
import './MoreMatches.css';

// Team logo fallback mapping for better visual representation
const teamFallbacks = {
  'WHU': '⚒️', 'LIV': '🔴', 'LEI': '🦊', 'EVE': '🔵', 'TOT': '⚪', 
  'MUN': '🔴', 'ARS': '🔴', 'CHE': '🔵', 'MCI': '💙', 'NEW': '⚫'
};

const TeamLogo = ({ team, className }) => {
  const handleImageError = (e) => {
    // Create a fallback with team symbol
    const fallbackElement = document.createElement('div');
    fallbackElement.className = `${className} team-fallback`;
    fallbackElement.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      color: white;
      font-size: 18px;
      font-weight: bold;
    `;
    fallbackElement.textContent = teamFallbacks[team.name] || team.name.charAt(0);
    e.target.parentNode.replaceChild(fallbackElement, e.target);
  };

  return (
    <img 
      src={team.logo} 
      alt={team.name} 
      className={className}
      onError={handleImageError}
    />
  );
};

const MatchCard = ({ teams, isLive, score }) => (
  <div className="highlight-item-placeholder">
    {isLive && <span className="live-badge-small">LIVE</span>}
    <div className="match-card-teams">
      <div className="team-info">
        <TeamLogo team={teams[0]} className="team-logo-small" />
        <span className="team-abbreviation">{teams[0].name}</span>
      </div>
      <div className="vs-text">
        {score ? score : 'vs'}
      </div>
      <div className="team-info">
        <TeamLogo team={teams[1]} className="team-logo-small" />
        <span className="team-abbreviation">{teams[1].name}</span>
      </div>
    </div>
    <button className="watch-now-btn">
      {isLive ? 'Watch Live' : 'Watch Now'}
    </button>
  </div>
);

const MoreMatches = () => {
  const matches = [
    { 
      teams: [
        { name: 'WHU', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J48t3v3i_tcnWAN2FshQ_96x96.png' }, 
        { name: 'LIV', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png' }
      ], 
      isLive: true,
      score: '1-2'
    },
    { 
      teams: [
        { name: 'LEI', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfzyA_96x96.png' }, 
        { name: 'EVE', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/THaXFhWKn2E4QXZo0C-fFQ_96x96.png' }
      ], 
      isLive: false 
    },
    { 
      teams: [
        { name: 'TOT', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_m6eDR9k-E_O6DEe_rA_96x96.png' }, 
        { name: 'MUN', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69Ou-ppfa-nSYM6g_96x96.png' }
      ], 
      isLive: true,
      score: '0-1'
    },
    { 
      teams: [
        { name: 'MCI', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Ww_96x96.png' }, 
        { name: 'NEW', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/_Dz35gGKP4EhKfAWKFDnbA_96x96.png' }
      ], 
      isLive: true,
      score: '2-0'
    },
    { 
      teams: [
        { name: 'BHA', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/EKKcdsZrUaCEIrr5XOXUPA_96x96.png' }, 
        { name: 'CRY', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/sSgDmMGhw0sR-1zjNHdwPA_96x96.png' }
      ], 
      isLive: false 
    },
  ];

  return (
    <div className="highlights-carousel">
      <h2>More Matches (7)</h2>
      <div className="carousel-content">
        {matches.map((match, index) => (
          <MatchCard key={index} teams={match.teams} isLive={match.isLive} />
        ))}
      </div>
    </div>
  );
};

export default MoreMatches;
