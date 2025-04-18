// src/controllers/userController.js
const userController = {
  post: (req, res) => {
    console.log("Received a POST request to /users");
    console.log("Request body:", req.body);

    res.status(201).send("User created (simulated)!");
  },
  getById: (req, res) => {
    const productId = req.params.id;
    console.log(`Received a GET request to /products/${productId}`);

    res.status(200).send(`Product with ID ${productId} retrieved (simulated)!`);
  },
  put: (req, res) => {
    const itemId = req.params.id;
    console.log(`Received a PUT request to /items/${itemId}`);
    console.log("Request body:", req.body);

    res.status(200).send(`Item ${itemId} updated (simulated)!`);
  },
  delete: (req, res) => {
    const resourceId = req.params.id;
    console.log(`Received a DELETE request to /resources/${resourceId}`);

    res.status(204).send();
  },
};

module.exports = userController;
