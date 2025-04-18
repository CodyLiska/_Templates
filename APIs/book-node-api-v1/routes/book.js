var express = require("express");
const BookController = require("../controllers/BookController");

var router = express.Router();

// GET ALL
router.get("/", BookController.bookList);
// CREATE
router.post("/", BookController.bookStore);
// READ
router.get("/:id", BookController.bookDetail);
// UPDATE
router.put("/:id", BookController.bookUpdate);
// DELETE
router.delete("/:id", BookController.bookDelete);

module.exports = router;
