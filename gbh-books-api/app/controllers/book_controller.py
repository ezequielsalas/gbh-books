from typing import List
from app.services.book_service import BookService
from app.dtos.book_dto import BookDTO
from fastapi import APIRouter, Depends, HTTPException, Request

router = APIRouter()

@router.get("/books", response_model=List[BookDTO])
async def get_books(service: BookService = Depends(BookService)):
    books = service.list_books()
    return books

@router.get("/book/{book_id}")
async def get_book(book_id: int, service: BookService = Depends(BookService)):
    book = service.get_book(book_id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    return book

@router.get("/book/{book_id}/page/{page_number}/{format}")
async def read_page(book_id: int, page_number: int, format: str, request: Request, service: BookService = Depends()):
    if format not in ["text", "html"]:
        raise HTTPException(status_code=400, detail="Unsupported format")

    page_content = service.get_page_content(book_id, page_number, format, request)

    return page_content