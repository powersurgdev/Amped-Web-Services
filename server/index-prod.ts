import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";

import express, { type Express } from "express";
import runApp from "./app";
import { injectMetaTags } from "./meta-inject.js";

export async function serveStatic(app: Express, _server: Server) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Cache the base HTML in memory
  const indexHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  // Inject per-page meta tags before serving
  app.use("*", (req, res) => {
    const urlPath = req.originalUrl.split('?')[0];
    const enhanced = injectMetaTags(indexHtml, urlPath);
    res.setHeader("Content-Type", "text/html");
    res.send(enhanced);
  });
}

(async () => {
  await runApp(serveStatic);
})();
