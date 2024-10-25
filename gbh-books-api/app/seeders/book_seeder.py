import sys
import os
# Add the project root to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from app.models.book_model import Book
from app.models.page_model import Page
from app.db import SessionLocal

def seed_books():
    db = SessionLocal()
    book1 = Book(title="Getting Real", author="37 Signals", description="The Smarter, Faster, Easier Way to Build a Successful Web Application, 37signals, 2006")
    db.add(book1)
    db.commit()

    pages = [
        Page(book_id=book1.id, page_number=i, content=f"Content of page {i}")
        for i in range(1, 101)
    ]
    db.bulk_save_objects(pages)
    db.commit()

if __name__ == '__main__':
    seed_books()