from sqlalchemy import Column, Integer, String, Float
from ..core.database import Base

class Player(Base):
    __tablename__ = "players"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    role = Column(String)
    region = Column(String)
    team = Column(String)
    age = Column(Integer)
    kda = Column(Float)
    win_rate = Column(Float)
    games_played = Column(Integer)
    avg_kills = Column(Float)
    avg_deaths = Column(Float)
    avg_assists = Column(Float)
