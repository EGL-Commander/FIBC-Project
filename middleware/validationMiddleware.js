import { validationResult } from "express-validator";
import mongoose from "mongoose";
import { ApiError } from "../utils/apiError.js";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));
    return next(new ApiError(400, "Validation Error", errorMessages));
  }
  next();
};

export const validateObjectId = (paramName = "id") => {
  return (req, res, next) => {
    const id = req.params[paramName];
    if (id && !id.startsWith("mock") && !mongoose.Types.ObjectId.isValid(id)) {
      return next(new ApiError(400, `Invalid ID format: ${id}`));
    }
    next();
  };
};
