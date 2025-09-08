# EsportsStats
Una aplicación web para visualizar y comparar estadísticas de jugadores de League of Legends.

## Configuración
1. Clona el repositorio.
2. Ejecuta `docker-compose up` para iniciar el backend, frontend y la base de datos.
3. Accede al frontend en `http://localhost:3000` y a la API en `http://localhost:8000`.

## Estructura
- `backend/`: Backend con FastAPI, SQLAlchemy y PostgreSQL.
- `frontend/`: Frontend con React.js y Chart.js para visualizaciones.
- `database/`: Esquema y migraciones de PostgreSQL.
