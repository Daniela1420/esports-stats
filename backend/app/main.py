from fastapi import FastAPI
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Bienvenido a la API de EsportsStats"}
