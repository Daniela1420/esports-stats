from fastapi import APIRouter
router = APIRouter()

@router.get("/players")
async def list_players():
    return {"message": "Lista de jugadores"}
