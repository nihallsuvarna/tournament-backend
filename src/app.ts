import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { prisma } from "./config/prisma.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Routes — mount your feature routers here later, e.g.:
// import userRoutes from "./routes/user.routes.js";
// app.use("/api/users", userRoutes);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

// Central error handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
