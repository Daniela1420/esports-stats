import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [filters, setFilters] = useState({ role: '', region: '' });
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <PlayerContext.Provider value={{ players, setPlayers, filters, setFilters, searchTerm, setSearchTerm }}>
      {children}
    </PlayerContext.Provider>
  );
};
