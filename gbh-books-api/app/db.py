from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Define the SQLite database URL (can be switched to PostgreSQL or others)
SQLALCHEMY_DATABASE_URL = "sqlite:///./gbh-books.db"

# Create the SQLAlchemy engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Create a configured "SessionLocal" class for handling sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create the base class that all models will inherit from
Base = declarative_base()

# Dependency for getting a DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
