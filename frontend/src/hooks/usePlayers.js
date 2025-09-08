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
        const params = { page, ...filters, search: searchTerm };
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/players`, { params });
        setPlayers(response.data.players);
        setTotalPages(response.data.total_pages);
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
