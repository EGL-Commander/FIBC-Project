import express from "express";
import rateLimit from "express-rate-limit";
import { login, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validationMiddleware.js";
import { loginValidator } from "../validators/authValidator.js";

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many login attempts, please try again after 15 minutes.",
  },
});

router.post("/login", loginLimiter, loginValidator, validateRequest, login);
router.get("/me", protect, getMe);

export default router;
