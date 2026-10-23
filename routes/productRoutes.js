import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { uploadSingleImage } from "../middleware/uploadMiddleware.js";
import {
  validateRequest,
  validateObjectId,
} from "../middleware/validationMiddleware.js";
import {
  createProductValidator,
  updateProductValidator,
} from "../validators/productValidator.js";

const router = express.Router();

// Public routes
router.get("/", getProducts);

// Admin-protected routes
router.post(
  "/",
  protect,
  adminOnly,
  uploadSingleImage,
  createProductValidator,
  validateRequest,
  createProduct
);

router.put(
  "/:id",
  protect,
  adminOnly,
  validateObjectId("id"),
  uploadSingleImage,
  updateProductValidator,
  validateRequest,
  updateProduct
);

router.delete("/:id", protect, adminOnly, validateObjectId("id"), deleteProduct);

export default router;
