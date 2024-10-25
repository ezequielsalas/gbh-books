from fastapi import FastAPI
from app.db import Base, engine
from app.controllers import book_controller
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app
app = FastAPI()

# Allow CORS from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://gbh-books-ui:3000"],  # Adjust this to the URL where your React app is running
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)
# Create the database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(book_controller.router)

# Set up Jinja2Templates for HTML rendering
templates = Jinja2Templates(directory="app/templates")
