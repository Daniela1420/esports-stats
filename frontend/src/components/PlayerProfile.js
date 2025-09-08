import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlayerProfile = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/players/${id}`);
        setPlayer(response.data);
      } catch (error) {
        console.error('Error fetching player:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayer();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!player) return <p>Jugador no encontrado</p>;

  const kdaData = {
    labels: ['Kills', 'Muertes', 'Asistencias'],
    datasets: [
      {
        label: 'KDA',
        data: [player.avg_kills, player.avg_deaths, player.avg_assists],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">{player.name}</h2>
      <div className="bg-white p-6 rounded shadow">
        <p><strong>Rol:</strong> {player.role}</p>
        <p><strong>Región:</strong> {player.region}</p>
        <p><strong>Equipo:</strong> {player.team}</p>
        <p><strong>Edad:</strong> {player.age}</p>
        <p><strong>KDA:</strong> {player.kda}</p>
        <p><strong>Win Rate:</strong> {player.win_rate}%</p>
        <p><strong>Partidas jugadas:</strong> {player.games_played}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Estadísticas KDA</h3>
          <Bar data={kdaData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
