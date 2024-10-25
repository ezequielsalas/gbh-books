from pydantic import BaseModel

class PageDTO(BaseModel):
    id: int
    page_number: int
    content: str

    class Config:
        from_attributes = True