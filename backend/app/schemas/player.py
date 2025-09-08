from pydantic import BaseModel

class PlayerBase(BaseModel):
    name: str
    role: str
    region: str
    team: str
    age: int
    kda: float
    win_rate: float
    games_played: int
    avg_kills: float
    avg_deaths: float
    avg_assists: float

class PlayerCreate(PlayerBase):
    pass

class Player(PlayerBase):
    id: int
    class Config:
        orm_mode = True
