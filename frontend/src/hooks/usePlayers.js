import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PlayerContext } from '../context/PlayerContext';

const usePlayers = (page = 1) => {
  const { filters, searchTerm, setPlayers } = useContext(PlayerContext);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/players`);
        setPlayers(response.data);
        setTotalPages(1);
      } catch (error) {
        console.error('Error fetching players:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, [page, filters, searchTerm, setPlayers]);

  return { loading, totalPages };
};

export default usePlayers;
