// src/controllers/rootController.js
const rootController = {
  get: (req, res) => {
    console.log("Received a GET request to /");
    res
      .status(200)
      .send("Welcome to the Node.js API! This is a backend-only example.");
  },
};

module.exports = rootController;
