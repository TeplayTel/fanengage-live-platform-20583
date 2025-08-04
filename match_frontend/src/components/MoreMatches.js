import React from 'react';
import './MoreMatches.css';

const MatchCard = ({ teams, isLive }) => (
  <div className="highlight-item-placeholder">
    {isLive && <span className="live-badge-small">LIVE</span>}
    <div className="match-card-teams">
      <img src={teams[0].logo} alt={teams[0].name} className="team-logo-small" />
      <span>vs</span>
      <img src={teams[1].logo} alt={teams[1].name} className="team-logo-small" />
    </div>
    <button className="watch-now-btn">Watch Now</button>
  </div>
);

const MoreMatches = () => {
  const matches = [
    { teams: [{ name: 'WHU', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J48t3v3i_tcnWAN2FshQ_96x96.png' }, { name: 'LIV', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png' }], isLive: true },
    { teams: [{ name: 'LEI', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfzyA_96x96.png' }, { name: 'EVE', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J48t3v3i_tcnWAN2FshQ_96x96.png' }], isLive: false },
    { teams: [{ name: 'TOT', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_m6eDR9k-E_O6DEe_rA_96x96.png' }, { name: 'MUN', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69Ou-ppfa-nSYM6g_96x96.png' }], isLive: true },
    { teams: [{ name: 'WHU', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J48t3v3i_tcnWAN2FshQ_96x96.png' }, { name: 'LIV', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_96x96.png' }], isLive: true },
    { teams: [{ name: 'LEI', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfzyA_96x96.png' }, { name: 'EVE', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J48t3v3i_tcnWAN2FshQ_96x96.png' }], isLive: false },
    { teams: [{ name: 'TOT', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_m6eDR9k-E_O6DEe_rA_96x96.png' }, { name: 'MUN', logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69Ou-ppfa-nSYM6g_96x96.png' }], isLive: true },
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
