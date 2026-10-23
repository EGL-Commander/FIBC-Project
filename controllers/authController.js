import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

// Fallback bcrypt hash used only when ADMIN_PASSWORD_HASH is not set.
const FALLBACK_ADMIN_PASSWORD_HASH =
  "$2a$10$5i78OKCtiOA9ZoWlIY2W/ue2rBen5wvXXVuV/wT91CekgkHf/.RJu";

// Read at call time (not import time) so values loaded from .env are respected.
const getAdminPasswordHash = () =>
  process.env.ADMIN_PASSWORD_HASH || FALLBACK_ADMIN_PASSWORD_HASH;

/**
 * @desc    Admin login
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res, next) => {
  try {
    const usernameInput = (req.body.username || req.body.email || "").toLowerCase().trim();
    const { password } = req.body;

    if (!usernameInput || !password) {
      return next(new ApiError(400, "Please provide username and password"));
    }

    const adminEmail = (process.env.ADMIN_EMAIL || "admin@fibc.com").toLowerCase();

    // Verify if input username matches 'admin' or admin email
    const isTargetAdmin =
      usernameInput === "admin" || usernameInput === adminEmail;

    // Database offline mode
    if (mongoose.connection.readyState !== 1) {
      if (isTargetAdmin) {
        // Compare entered password with stored bcrypt hash
        const isMatch = await bcrypt.compare(password, getAdminPasswordHash());

        if (isMatch) {
          const token = jwt.sign(
            { id: "admin_fallback_id", role: "admin" },
            process.env.JWT_SECRET || "default_secret",
            { expiresIn: "7d" }
          );
          return res.status(200).json(
            new ApiResponse(
              200,
              {
                token,
                user: {
                  id: "admin_fallback_id",
                  name: "FIBC Admin",
                  email: adminEmail,
                  role: "admin",
                },
              },
              "Login successful"
            )
          );
        }
      }
      return next(new ApiError(401, "Invalid username or password"));
    }

    // Database online: find admin by email or name
    const user = await User.findOne({
      $or: [
        { email: usernameInput },
        { name: new RegExp(`^${usernameInput}$`, "i") },
      ],
    }).select("+password");

    if (!user) {
      if (isTargetAdmin) {
        const isMatch = await bcrypt.compare(password, getAdminPasswordHash());
        if (isMatch) {
          const token = jwt.sign(
            { id: "admin_fallback_id", role: "admin" },
            process.env.JWT_SECRET || "default_secret",
            { expiresIn: "7d" }
          );
          return res.status(200).json(
            new ApiResponse(
              200,
              {
                token,
                user: {
                  id: "admin_fallback_id",
                  name: "FIBC Admin",
                  email: adminEmail,
                  role: "admin",
                },
              },
              "Login successful"
            )
          );
        }
      }
      return next(new ApiError(401, "Invalid username or password"));
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new ApiError(401, "Invalid username or password"));
    }

    const token = user.getSignedJwtToken();

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        },
        "Login successful"
      )
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get current authenticated user
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = async (req, res, next) => {
  try {
    return res.status(200).json(
      new ApiResponse(
        200,
        {
          id: req.user?._id || "admin_id",
          name: req.user?.name || "FIBC Admin",
          email: req.user?.email || "admin@fibc.com",
          role: req.user?.role || "admin",
        },
        "User profile retrieved"
      )
    );
  } catch (error) {
    next(error);
  }
};
