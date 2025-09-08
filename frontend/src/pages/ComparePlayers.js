import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PlayerComparison from '../components/PlayerComparison';

const ComparePlayers = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (query, setPlayer) => {
    if (query) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/players/search`, {
          params: { name: query },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleCompare = () => {
    if (player1 && player2) {
      navigate(`/compare?id1=${player1.id}&id2=${player2.id}`);
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Comparar Jugadores</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Jugador 1"
            value={player1.name || ''}
            onChange={e => {
              setPlayer1({ name: e.target.value });
              handleSearch(e.target.value, setPlayer1);
            }}
          />
          {suggestions.length > 0 && player1.name && (
            <ul className="absolute bg-white border rounded w-full mt-1 max-h-60 overflow-auto">
              {suggestions.map(player => (
                <li
                  key={player.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setPlayer1(player);
                    setSuggestions([]);
                  }}
                >
                  {player.name} ({player.role}, {player.region})
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Jugador 2"
            value={player2.name || ''}
            onChange={e => {
              setPlayer2({ name: e.target.value });
              handleSearch(e.target.value, setPlayer2);
            }}
          />
          {suggestions.length > 0 && player2.name && (
            <ul className="absolute bg-white border rounded w-full mt-1 max-h-60 overflow-auto">
              {suggestions.map(player => (
                <li
                  key={player.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setPlayer2(player);
                    setSuggestions([]);
                  }}
                >
                  {player.name} ({player.role}, {player.region})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleCompare}
        disabled={!player1.id || !player2.id}
      >
        Comparar
      </button>
      <PlayerComparison />
    </div>
  );
};

export default ComparePlayers;
