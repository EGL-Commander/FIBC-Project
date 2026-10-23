import { ApiError } from "../utils/apiError.js";

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  error.statusCode = err.statusCode || 500;

  // Log error for server diagnostics
  if (process.env.NODE_ENV === "development") {
    console.error("[Error Handler]", err);
  }

  // Multer Error handling
  if (err.name === "MulterError") {
    if (err.code === "LIMIT_FILE_SIZE") {
      error = new ApiError(400, "File size exceeds the 5MB limit");
    } else {
      error = new ApiError(400, `File upload error: ${err.message}`);
    }
  }

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    error = new ApiError(400, `Resource not found with ID: ${err.value}`);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || "field";
    error = new ApiError(400, `Duplicate value entered for ${field}`);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ApiError(400, message);
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    error = new ApiError(401, "Invalid token authentication");
  }

  if (err.name === "TokenExpiredError") {
    error = new ApiError(401, "Token expired, please log in again");
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    errors: error.errors || [],
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
