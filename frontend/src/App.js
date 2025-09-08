import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import Home from './pages/Home';
import PlayerDetails from './pages/PlayerDetails';
import ComparePlayers from './pages/ComparePlayers';
import './assets/styles/App.css';

const App = () => (
  <PlayerProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
        <Route path="/compare" element={<ComparePlayers />} />
      </Routes>
    </Router>
  </PlayerProvider>
);

export default App;
