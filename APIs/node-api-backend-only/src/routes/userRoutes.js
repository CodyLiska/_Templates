// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const rootController = require("../controllers/rootController");
const userController = require("../controllers/userController");

router.get("/", rootController.get); // GET /
router.post("/users", userController.post); // POST /users
router.get("/products/:id", userController.getById); // GET /products/:id
router.put("/items/:id", userController.put); // PUT /items/:id
router.delete("/resources/:id", userController.delete); // DELETE /resources/:id

module.exports = router;
