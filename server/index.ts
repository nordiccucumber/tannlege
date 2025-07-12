import express, { type Request, Response, NextFunction } from "express";
import { setupVite, serveStatic, log } from "./vite";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging av /api-ruter
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

// ✅ Google Sheets proxy-endepunkt (fungerer både lokalt og etter deploy)
const SHEET_ID = "1B5CI89IJoBDmpP3mYI99ec-xDpPLd9DY4mOQJ95566s";
const GIDS: Record<string, string> = {
  behandlinger: "0",
  apningstider: "77335414",
  kontaktinfo: "1346966102",
};

app.get("/api/:type", async (req, res) => {
  const type = req.params.type;
  const gid = GIDS[type];

  if (!gid) return res.status(404).send("Ugyldig type");

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    const csv = await response.text();
    res.setHeader("Content-Type", "text/csv");
    res.send(csv);
  } catch (err) {
    console.error("Feil ved henting av Google Sheet:", err);
    res.status(500).send("Kunne ikke hente data");
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  throw err;
});

// Start server
(async () => {
  if (app.get("env") === "development") {
    const server = await setupVite(app);
    server.listen(5000, "0.0.0.0", () => log("serving on port 5000"));
  } else {
    serveStatic(app);
    app.listen(5000, "0.0.0.0", () => log("serving on port 5000"));
  }
})();
