var express = require("express");
var bookRouter = require("./routes/book");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Prefix for Books API
app.use("/api/books", bookRouter);

// Start Server (LOCALHOST ONLY)
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 5000
app.listen(PORT, "localhost", () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

// // Start Server (CODESPACE ONLY)
// const PORT = [process.env.PORT || 3000]; // Use PORT from .env or default to 5000
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on port ${PORT}`);
// });
