import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSeoIntoHtml } from "./seo-injector";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(
    "/assets",
    express.static(path.join(distPath, "assets"), {
      dotfiles: "deny",
      maxAge: "365d",
      immutable: true,
      etag: false,
      lastModified: false,
      index: false,
    })
  );

  app.use(
    express.static(distPath, {
      dotfiles: "deny",
      maxAge: "7d",
      etag: true,
      lastModified: true,
      index: false,
    })
  );

  const indexHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  app.use("/{*path}", (req, res) => {
    const html = injectSeoIntoHtml(indexHtml, req.path);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
}
