import { body } from "express-validator";

export const contactSubmissionValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Please enter a valid 10-digit phone number"),

  body("company")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Company name cannot exceed 100 characters"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 5, max: 3000 })
    .withMessage("Message must be between 5 and 3000 characters"),
];

export const updateContactStatusValidator = [
  body("status")
    .trim()
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["new", "in-review", "resolved", "archived"])
    .withMessage("Invalid status specified"),
];
