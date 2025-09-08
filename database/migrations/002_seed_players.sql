-- Inserción de datos de ejemplo para la tabla players
INSERT INTO players (name, role, region, team, age, kda, win_rate, games_played, avg_kills, avg_deaths, avg_assists) VALUES
('Juan Pérez', 'ADC', 'LAN', 'Team Alpha', 22, 4.5, 60.5, 150, 7.2, 3.1, 5.8),
('María Gómez', 'Mid', 'LAS', 'Fire Dragons', 25, 3.8, 55.0, 200, 6.5, 4.0, 7.2),
('Carlos Rodríguez', 'Jungle', 'BR', 'Thunder Esports', 19, 5.1, 62.3, 120, 5.8, 2.9, 8.4),
('Ana López', 'Support', 'NA', 'Storm Breakers', 27, 2.9, 58.7, 180, 1.5, 4.5, 12.3),
('Luis Martínez', 'Top', 'LAN', 'Iron Wolves', 23, 4.0, 57.2, 160, 4.8, 3.8, 6.5);

-- Nota: Para datos masivos, usa el script backend/app/services/data_generator.py
