import express from "express";
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

const router = express.Router();

// GET Product(s)
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

// CREATE Product
router.post("/", createProduct);

// UPDATE Product
router.put("/:id", updateProduct);

// DELETE Product
router.delete("/:id", deleteProduct);

export default router;