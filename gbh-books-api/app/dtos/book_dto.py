from pydantic import BaseModel
from typing import List
from app.dtos.page_dto import PageDTO

class BookDTO(BaseModel):
    id: int
    title: str
    author: str
    description: str
    pages: List[PageDTO]

    class Config:
        from_attributes = True