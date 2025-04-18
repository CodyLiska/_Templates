const Book = require("../models/BookModel");

// List all books
exports.bookList = async (req, res) => {
  console.log("/books/list-all-books(bookList)");
};

// Add new book
exports.bookStore = async (req, res) => {
  console.log("/books/add-a-book(bookStore)");
};

// Get book details
exports.bookDetail = async (req, res) => {
  console.log("/books/get-book-details(bookDetail)");
};

// Update book
exports.bookUpdate = async (req, res) => {
  console.log("/books/update-a-book(bookUpdate)");
};

// Delete book
exports.bookDelete = async (req, res) => {
  console.log("/books/delete-a-book(bookDelete)");
};
