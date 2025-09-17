from fastapi import FastAPI
from .api.v1 import players

app = FastAPI()

app.include_router(players.router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Bienvenido a la API de EsportsStats"}