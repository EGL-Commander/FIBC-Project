import { body } from "express-validator";

export const createGalleryValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2, max: 120 })
    .withMessage("Title must be between 2 and 120 characters"),
  // Category: free text — admin can type anything
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isLength({ max: 100 })
    .withMessage("Category cannot exceed 100 characters"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description cannot exceed 1000 characters"),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer"),
];

export const updateGalleryValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 2, max: 120 })
    .withMessage("Title must be between 2 and 120 characters"),
  // Category: free text — admin can type anything
  body("category")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category cannot exceed 100 characters"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description cannot exceed 1000 characters"),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer"),
];
