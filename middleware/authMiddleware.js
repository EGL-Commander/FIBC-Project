import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../models/User.js";
import { ApiError } from "../utils/apiError.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ApiError(401, "Not authorized to access this route"));
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );

    // If DB is offline, use fallback admin identity from the token
    if (mongoose.connection.readyState !== 1) {
      if (decoded.role === "admin") {
        req.user = {
          _id: decoded.id,
          id: decoded.id,
          name: "FIBC Admin",
          email: process.env.ADMIN_EMAIL || "admin@fibc.com",
          role: "admin",
        };
        return next();
      }
      return next(new ApiError(401, "User not found or token is invalid"));
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ApiError(401, "User not found or token is invalid"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ApiError(401, "Not authorized, token failed verification"));
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return next(new ApiError(403, "Forbidden: Admin privileges required"));
  }
};
