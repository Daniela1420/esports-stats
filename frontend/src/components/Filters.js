import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const Filters = () => {
  const { filters, setFilters } = useContext(PlayerContext);

  const roles = ['ADC', 'Mid', 'Jungle', 'Support', 'Top'];
  const regions = ['LAN', 'LAS', 'BR', 'NA'];

  return (
    <div className="mb-4 flex flex-col md:flex-row gap-4">
      <select
        className="p-2 border rounded"
        value={filters.role}
        onChange={e => setFilters({ ...filters, role: e.target.value })}
      >
        <option value="">Todos los roles</option>
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <select
        className="p-2 border rounded"
        value={filters.region}
        onChange={e => setFilters({ ...filters, region: e.target.value })}
      >
        <option value="">Todas las regiones</option>
        {regions.map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
