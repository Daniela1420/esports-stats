CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(20) CHECK (role IN ('ADC', 'Mid', 'Jungle', 'Support', 'Top')),
    region VARCHAR(10) CHECK (region IN ('LAN', 'LAS', 'BR', 'NA')),
    team VARCHAR(100),
    age INTEGER CHECK (age >= 16 AND age <= 40),
    kda FLOAT NOT NULL,
    win_rate FLOAT NOT NULL,
    games_played INTEGER NOT NULL,
    avg_kills FLOAT NOT NULL,
    avg_deaths FLOAT NOT NULL,
    avg_assists FLOAT NOT NULL
);

CREATE INDEX idx_player_name ON players(name);
CREATE INDEX idx_player_role ON players(role);
CREATE INDEX idx_player_region ON players(region);
