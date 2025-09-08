import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import usePlayers from '../hooks/usePlayers';

const PlayerList = () => {
  const { players } = useContext(PlayerContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, totalPages } = usePlayers(currentPage);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Lista de Jugadores</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map(player => (
              <div
                key={player.id}
                className="player-card bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/player/${player.id}`)}
              >
                <h3 className="text-lg font-semibold">{player.name}</h3>
                <p>Rol: {player.role}</p>
                <p>Región: {player.region}</p>
                <p>Equipo: {player.team}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Anterior
            </button>
            <span className="px-4 py-2">Página {currentPage} de {totalPages}</span>
            <button
              className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerList;
