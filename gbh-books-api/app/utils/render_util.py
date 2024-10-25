from fastapi.templating import Jinja2Templates
from fastapi import Request

templates = Jinja2Templates(directory="app/templates")


def render_plain_text(page):
    # Return the page content as plain text
    return {"page_number": page.page_number,"book_title": page.book.title,  "content": page.content}


def render_html_page(request: Request, page):
    # Return the page content rendered as HTML using the template
    return templates.TemplateResponse(
        "books/page.html",
        {
            "request": request,
            "book_title": page.book.title,
            "page_number": page.page_number,
            "page_content": page.content
        }
    )
# Future: Add more formats here (e.g., PDF, EPUB, Markdown)