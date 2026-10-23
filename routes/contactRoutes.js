import express from "express";
import rateLimit from "express-rate-limit";
import {
  createContactInquiry,
  getContactInquiries,
  getContactInquiryById,
  updateContactStatus,
  deleteContactInquiry,
} from "../controllers/contactController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  validateRequest,
  validateObjectId,
} from "../middleware/validationMiddleware.js";
import {
  contactSubmissionValidator,
  updateContactStatusValidator,
} from "../validators/contactValidator.js";

const router = express.Router();

// Rate limiter for contact submissions (max 5 inquiries per 15 minutes per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many contact submissions from this IP, please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public submission route
router.post(
  "/",
  contactLimiter,
  contactSubmissionValidator,
  validateRequest,
  createContactInquiry
);

// Admin-protected management routes
router.get("/", protect, adminOnly, getContactInquiries);
router.get(
  "/:id",
  protect,
  adminOnly,
  validateObjectId("id"),
  getContactInquiryById
);
router.patch(
  "/:id",
  protect,
  adminOnly,
  validateObjectId("id"),
  updateContactStatusValidator,
  validateRequest,
  updateContactStatus
);
router.delete(
  "/:id",
  protect,
  adminOnly,
  validateObjectId("id"),
  deleteContactInquiry
);

export default router;
