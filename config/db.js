import mongoose from "mongoose";

/**
 * Connect to MongoDB when a URI is explicitly configured.
 * Without MONGODB_URI the app intentionally uses its JSON file store.
 * Returns true only when a MongoDB connection is available.
 */
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log("[Database] MONGODB_URI is not set; using the JSON file store.");
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`[Database Error] ${error.message}`);
    console.warn("[Database Warning] MongoDB is unavailable; using the JSON file store.");
    return false;
  }
};
