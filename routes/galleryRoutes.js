import express from "express";
import {
  getGalleryItems,
  getGalleryItemById,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from "../controllers/galleryController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { uploadSingleImage } from "../middleware/uploadMiddleware.js";
import {
  validateRequest,
  validateObjectId,
} from "../middleware/validationMiddleware.js";
import {
  createGalleryValidator,
  updateGalleryValidator,
} from "../validators/galleryValidator.js";

const router = express.Router();

// Public routes
router.get("/", getGalleryItems);
router.get("/:id", validateObjectId("id"), getGalleryItemById);

// Admin-protected routes
router.post(
  "/",
  protect,
  adminOnly,
  uploadSingleImage,
  createGalleryValidator,
  validateRequest,
  createGalleryItem
);

router.put(
  "/:id",
  protect,
  adminOnly,
  validateObjectId("id"),
  uploadSingleImage,
  updateGalleryValidator,
  validateRequest,
  updateGalleryItem
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  validateObjectId("id"),
  deleteGalleryItem
);

export default router;
