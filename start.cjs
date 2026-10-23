// CommonJS-compatible Hostinger entry point; the ESM app binds its port immediately.
import("./start.js").catch((error) => {
  console.error("[Startup] Failed to load application:", error);
  process.exit(1);
});
