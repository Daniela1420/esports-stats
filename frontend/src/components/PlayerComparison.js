import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlayerComparison = () => {
  const location = useLocation();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      const params = new URLSearchParams(location.search);
      const id1 = params.get('id1');
      const id2 = params.get('id2');
      if (!id1 || !id2) return;

      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/players/compare`, {
          params: { id1, id2 },
        });
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching comparison:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, [location.search]);

  if (loading) return <p>Cargando...</p>;
  if (players.length !== 2) return <p>Selecciona dos jugadores para comparar</p>;

  const kdaData = {
    labels: ['Kills', 'Muertes', 'Asistencias'],
    datasets: [
      {
        label: players[0].name,
        data: [players[0].avg_kills, players[0].avg_deaths, players[0].avg_assists],
        backgroundColor: '#36A2EB',
      },
      {
        label: players[1].name,
        data: [players[1].avg_kills, players[1].avg_deaths, players[1].avg_assists],
        backgroundColor: '#FF6384',
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Comparación de Jugadores</h2>
      <div className="comparison-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map(player => (
          <div key={player.id} className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold">{player.name}</h3>
            <p><strong>Rol:</strong> {player.role}</p>
            <p><strong>Región:</strong> {player.region}</p>
            <p><strong>Equipo:</strong> {player.team}</p>
            <p><strong>KDA:</strong> {player.kda}</p>
            <p><strong>Win Rate:</strong> {player.win_rate}%</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Comparación KDA</h3>
        <Bar data={kdaData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default PlayerComparison;
