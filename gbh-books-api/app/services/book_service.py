from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException
from app.repositories.book_repository import BookRepository
from app.dtos.book_dto import BookDTO
from app.db import get_db

from fastapi import Request

from app.utils import render_util


class BookService:
    def __init__(self, db: Session = Depends(get_db)):
        self.repository = BookRepository(db)

    def list_books(self):
        books = self.repository.get_books()
        return [BookDTO.model_validate(book) for book in books]

    def get_book(self, book_id):
        return self.repository.get_book_by_id(book_id)

    def get_page_content(self, book_id: int, page_number: int, format: str, request: Request):
        page = self.repository.get_page(book_id, page_number)
        if not page:
            raise HTTPException(status_code=404, detail="Page not found")

        if format == "text":
            return render_util.render_plain_text(page)
        elif format == "html":
            return render_util.render_html_page(request, page)
        else:
            raise HTTPException(status_code=400, detail="Unsupported format")
