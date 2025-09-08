from faker import Faker
from ..core.database import SessionLocal
from ..models.player import Player

def generate_players(n=200):
    fake = Faker()
    roles = ["ADC", "Mid", "Jungle", "Support", "Top"]
    regions = ["LAN", "LAS", "BR", "NA"]
    db = SessionLocal()
    for _ in range(n):
        player = Player(
            name=fake.name(),
            role=fake.random_element(roles),
            region=fake.random_element(regions),
            team=fake.company(),
            age=fake.random_int(16, 40),
            kda=round(fake.random_number(1, 100) / 10, 2),
            win_rate=round(fake.random_number(0, 100), 2),
            games_played=fake.random_int(10, 500),
            avg_kills=round(fake.random_number(0, 20), 2),
            avg_deaths=round(fake.random_number(0, 20), 2),
            avg_assists=round(fake.random_number(0, 30), 2)
        )
        db.add(player)
    db.commit()
    db.close()
