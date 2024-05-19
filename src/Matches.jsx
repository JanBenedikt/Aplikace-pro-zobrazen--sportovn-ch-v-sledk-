import React, { useState, useEffect } from 'react';

const Matches = ({ matches }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (match) => {
    const updatedFavorites = favorites.includes(match.id)
      ? favorites.filter(id => id !== match.id)
      : [...favorites, match.id];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="matches">
      <h2>Zápasy</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.homeTeam} vs {match.awayTeam} - {match.date}
            <button onClick={() => toggleFavorite(match)}>
              {favorites.includes(match.id) ? 'Odebrat z oblíbených' : 'Přidat do oblíbených'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
