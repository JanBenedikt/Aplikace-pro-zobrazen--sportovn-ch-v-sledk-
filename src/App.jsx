import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Matches from './components/Matches';
import Teams from './components/Teams';
import Statistics from './components/Statistics';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const matchesResponse = await axios.get('YOUR_API_ENDPOINT_FOR_MATCHES');
        const teamsResponse = await axios.get('YOUR_API_ENDPOINT_FOR_TEAMS');
        setMatches(matchesResponse.data);
        setTeams(teamsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Teams teams={teams} />
        <Matches matches={matches} />
        <Statistics teams={teams} />
      </div>
    </ThemeProvider>
  );
}

export default App;
