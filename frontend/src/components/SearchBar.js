import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { PlayerContext } from '../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { setSearchTerm } = useContext(PlayerContext);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const debounce = setTimeout(async () => {
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
    }, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSearch = () => {
    setSearchTerm(query);
    setSuggestions([]);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Buscar jugadores..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleSearch()}
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded w-full mt-1 max-h-60 overflow-auto">
          {suggestions.map(player => (
            <li
              key={player.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(player.name);
                setSuggestions([]);
                navigate(`/player/${player.id}`);
              }}
            >
              {player.name} ({player.role}, {player.region})
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
