import React from 'react';
import { Bar } from 'react-chartjs-2';

const Statistics = ({ teams }) => {
  const data = {
    labels: teams.map(team => team.name),
    datasets: [
      {
        label: 'Počet výher',
        data: teams.map(team => team.wins),
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return (
    <div className="statistics">
      <h2>Statistiky týmů</h2>
      <Bar data={data} />
    </div>
  );
};

export default Statistics;
