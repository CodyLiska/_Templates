# API Backend Scaffold

This project is a simple REST API for managing books using Express and MongoDB.

## Features

- List all books
- Add new book
- Get book details
- Update an existing book
- Delete a book

## Installation & Setup

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Use the included bruno collection to test the endpoints.
   - the endpoints will return a console log of the endpoint being called.

## Running the app

1. Run the app:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000/api/books`.

## API Endpoints

- GET /api/books — List all books
- POST /api/books — Add a new book∏(expects JSON body with title, author, and publishedYear)
- GET /api/books/:id — Get details of a specific book
- PUT /api/books/:id — Update an existing book (expects JSON body with updated fields)
- DELETE /api/books/:id — Delete a book

## Bruno Collection
The project includes a Bruno collection for API testing located under:

- bruno/Book API/bruno.json

This collection provides test requests for every endpoint:

- List all books — bruno/Book API/List all books.bru
- Add a new book — bruno/Book API/Add a new book.bru
- Get book details — bruno/Book API/Get book details.bru
- Update a book — bruno/Book API/Update a book.bru
- Delete a book — bruno/Book API/Delete a book.bru

## Project Structure

- app.js
- package.json
- README.md
- bruno/****
    - Book API/
        - Add a new book.bru
        - Delete a book.bru
        - Get book details.bru
        - List all books.bru
        - Update a book.bru
        - environments/
            - Environment 1.bru
- controllers/
    - BookController.js
- helpers/
- models/
    - BookModel.js
- routes/
    - book.js
```
