### Steps to Set Up the API


**Install dependencies (Consider using virtualenv)**: 
   ```bash
   pip install -r requirements.txt
   ```

**Run the service**: 
   ```bash
   uvicorn app.main:app --reload
   ```

**Seed the database**: 
   ```bash
   python -m app.seeders.book_seeder
   ```





