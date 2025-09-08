import React, { useContext } from 'react';
import axios from 'axios';
import { PlayerContext } from '../context/PlayerContext';

const ExportButton = () => {
  const { filters, searchTerm } = useContext(PlayerContext);

  const handleExport = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/players/export`, {
        params: { ...filters, search: searchTerm },
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'players.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error exporting CSV:', error);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-green-500 text-white rounded"
      onClick={handleExport}
    >
      Exportar a CSV
    </button>
  );
};

export default ExportButton;
