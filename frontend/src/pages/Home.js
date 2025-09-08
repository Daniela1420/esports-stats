import React from 'react';
import PlayerList from '../components/PlayerList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ExportButton from '../components/ExportButton';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <h1 className="text-3xl font-bold mb-6">EsportsStats</h1>
    <div className="flex justify-between mb-4">
      <SearchBar />
      <Link to="/compare" className="px-4 py-2 bg-blue-500 text-white rounded">
        Comparar Jugadores
      </Link>
    </div>
    <Filters />
    <ExportButton />
    <PlayerList />
  </div>
);

export default Home;
