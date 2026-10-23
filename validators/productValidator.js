import { body } from "express-validator";

export const createProductValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 2, max: 150 })
    .withMessage("Name must be between 2 and 150 characters"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ max: 2000 })
    .withMessage("Description cannot exceed 2000 characters"),
  body("slug")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Slug cannot exceed 200 characters"),
  body("category")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category cannot exceed 100 characters"),
  body("categoryId")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category ID cannot exceed 100 characters"),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer"),
  body("specifications")
    .optional(),
  body("applications")
    .optional(),
];

export const updateProductValidator = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 150 })
    .withMessage("Name must be between 2 and 150 characters"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 2000 })
    .withMessage("Description cannot exceed 2000 characters"),
  body("slug")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Slug cannot exceed 200 characters"),
  body("category")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category cannot exceed 100 characters"),
  body("categoryId")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Category ID cannot exceed 100 characters"),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer"),
  body("specifications")
    .optional(),
  body("applications")
    .optional(),
];
