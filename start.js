// Hostinger single-process entry point: Express API and Nitro SSR share one public server.
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import { Readable } from "node:stream";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { seedDatabase } from "./utils/seed.js";

const PORT = process.env.PORT || 5000;
let isShuttingDown = false;
let server;
let frontendPromise;

process.on("unhandledRejection", (err) => {
  console.error("[Unhandled Rejection]", err?.message || err);
});

// Load the bundled SSR application in this process. It no longer opens its own port.
frontendPromise = import("./web/server/index.mjs")
  .then((mod) => {
    const handler = mod.nitroApp?.fetch || mod.default?.fetch;
    if (typeof handler !== "function") throw new Error("Nitro frontend did not export a fetch handler");
    console.log("[Web] Frontend SSR handler loaded in the main process.");
    return handler;
  })
  .catch((err) => {
    console.error("[Web] Failed to load frontend SSR handler:", err?.stack || err);
    throw err;
  });

const main = express();
main.disable("x-powered-by");

// Keep the existing Express API and uploaded-file routes unchanged.
main.use((req, res, next) => {
  if (req.url.startsWith("/api") || req.url.startsWith("/uploads")) {
    return app(req, res, next);
  }

  (async () => {
    const fetchHandler = await frontendPromise;
    const forwardedProto = req.headers["x-forwarded-proto"];
    const protocol = (Array.isArray(forwardedProto) ? forwardedProto[0] : forwardedProto)?.split(",")[0]?.trim()
      || req.protocol
      || "https";
    const host = req.headers.host || "localhost";
    const requestUrl = new URL(req.originalUrl || req.url, `${protocol}://${host}`);
    const headers = new Headers();
    const hopByHopHeaders = new Set([
      "connection", "keep-alive", "proxy-authenticate", "proxy-authorization",
      "te", "trailer", "transfer-encoding", "upgrade", "host"
    ]);
    for (const [name, value] of Object.entries(req.headers)) {
      if (hopByHopHeaders.has(name.toLowerCase())) continue;
      if (Array.isArray(value)) value.forEach((v) => headers.append(name, v));
      else if (value !== undefined) headers.set(name, value);
    }

    const method = req.method.toUpperCase();
    const init = { method, headers };
    if (method !== "GET" && method !== "HEAD") {
      init.body = Readable.toWeb(req);
      init.duplex = "half";
    }

    const webResponse = await fetchHandler(new Request(requestUrl, init));
    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, name) => res.setHeader(name, value));
    if (!webResponse.body || method === "HEAD") return res.end();
    Readable.fromWeb(webResponse.body).on("error", (err) => {
      console.error("[Web] Response stream failed:", err?.message || err);
      if (!res.headersSent) res.status(500);
      res.end();
    }).pipe(res);
  })().catch((err) => {
    console.error(`[Web] ${req.method} ${req.originalUrl || req.url} failed:`, err?.stack || err);
    if (!res.headersSent) res.status(500).send("The website frontend could not be rendered.");
    else res.end();
  });
});

// Bind the public port immediately; database work remains in the background.
server = main.listen(PORT, () => {
  console.log(`[Server] FIBC website and API running on port ${PORT}`);
});

const shutdown = (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log(`[Server] Received ${signal}; shutting down.`);
  if (server) {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 4500).unref();
  } else {
    process.exit(0);
  }
};
for (const signal of ["SIGTERM", "SIGINT"]) process.on(signal, () => shutdown(signal));

if (!process.env.MONGODB_URI) {
  console.log("[Database] MONGODB_URI is not set; using the JSON file store.");
} else {
  connectDB()
    .then(async (connected) => {
      if (connected && mongoose.connection.readyState === 1) await seedDatabase();
    })
    .catch((err) => {
      console.error("[Database] Background initialisation failed; JSON file store remains available:", err?.message || err);
    });
}
