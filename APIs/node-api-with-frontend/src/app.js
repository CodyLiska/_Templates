// src/app.js
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const cors = require("cors"); // Import CORS

// Middleware (optional, but good practice)
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Mount the user routes under a base path (e.g., /api/users)
app.use("/", userRoutes);

// Enable CORS for all origins (for development - be more restrictive in production)
app.use(cors());

// Error handling middleware (important!)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace to the console
  res.status(500).send("Something broke!"); // Generic error response
});

module.exports = app;
