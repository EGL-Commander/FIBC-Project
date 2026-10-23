import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";
import { seedDatabase } from "./utils/seed.js";

const PORT = process.env.PORT || 5000;

// Connect to Database and start server
const startServer = async () => {
  await connectDB();
  await seedDatabase();

  const server = app.listen(PORT, () => {
    console.log(`[Server] FIBC Backend Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  });

  // Handle unhandled promise rejections gracefully
  process.on("unhandledRejection", (err) => {
    console.error(`[Unhandled Rejection] Error: ${err.message}`);
  });

  process.on("uncaughtException", (err) => {
    console.error(`[Uncaught Exception] Error: ${err.message}`);
    process.exit(1);
  });
};

startServer();
