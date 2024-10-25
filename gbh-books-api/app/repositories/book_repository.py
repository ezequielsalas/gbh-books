from sqlalchemy.orm import Session
from app.models.book_model import Book
from app.models.page_model import Page

class BookRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_books(self):
        return self.db.query(Book).all()

    def get_book_by_id(self, book_id: int):
        return self.db.query(Book).filter(Book.id == book_id).first()

    def get_page(self, book_id: int, page_number: int):
        return self.db.query(Page).filter(Page.book_id == book_id, Page.page_number == page_number).first()
