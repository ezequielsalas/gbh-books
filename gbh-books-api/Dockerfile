# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file and install the Python dependencies
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the FastAPI app to the working directory
COPY . /app

# Expose port 8000
EXPOSE 8000

# Run the gbh-books-api using Uvicorn
# This assumes your main FastAPI app is in app/main.py with an instance called "app"
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]