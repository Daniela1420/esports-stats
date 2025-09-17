from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ....core.database import SessionLocal
from ....models.player import Player
from ....schemas.player import Player as PlayerSchema

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/players", response_model=List[PlayerSchema])
async def list_players(db: Session = Depends(get_db)):
    players = db.query(Player).all()
    return players
