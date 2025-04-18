// index.js - Main entry point of the API

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Middleware (optional, but good practice)
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Define API routes

// Example route for GET /
app.get("/", (req, res) => {
  console.log("Received a GET request to /");
  res
    .status(200)
    .send("Welcome to the Node.js API!  This is a backend-only example.");
});

// Example route for POST /users
app.post("/users", (req, res) => {
  console.log("Received a POST request to /users");
  console.log("Request body:", req.body); // Log the received data

  // In a real application, you would process this data and store it in a database.
  // For this example, we just log it.

  res.status(201).send("User created (simulated)!"); // 201 Created status code
});

// Example route for GET /products/:id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  console.log(`Received a GET request to /products/${productId}`);

  // In a real application, you would fetch the product from a database based on the ID.
  // For this example, we just log it.

  res.status(200).send(`Product with ID ${productId} retrieved (simulated)!`);
});

// Example route for PUT /items/:id
app.put("/items/:id", (req, res) => {
  const itemId = req.params.id;
  console.log(`Received a PUT request to /items/${itemId}`);
  console.log("Request body:", req.body);

  res.status(200).send(`Item ${itemId} updated (simulated)!`);
});

// Example route for DELETE /resources/:id
app.delete("/resources/:id", (req, res) => {
  const resourceId = req.params.id;
  console.log(`Received a DELETE request to /resources/${resourceId}`);

  res.status(204).send(); // 204 No Content - successful deletion
});

// Error handling middleware (important!)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace to the console

  res.status(500).send("Something broke!"); // Generic error response
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
