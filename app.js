import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import galleryRoutes from "./routes/galleryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { ApiError } from "./utils/apiError.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security HTTP headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// CORS Configuration
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3000",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow during dev for flexible testing
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parsing with payload size limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Serve static uploaded files permanently
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "FIBC Backend API",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/gallery", galleryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// Catch 404 for unhandled API routes
app.use("*", (req, res, next) => {
  next(new ApiError(404, `Can't find ${req.originalUrl} on this server`));
});

// Global Error Handler
app.use(errorHandler);

export default app;
