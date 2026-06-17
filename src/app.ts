import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { prisma } from "./config/prisma.js";
import signUpRoute from "./modules/auth/auth.route.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Welcome note
app.get("/api/v1", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to Tournament", data: [] });
});

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Central error handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Auth routes
app.use("/api/v1/auth/", signUpRoute);

async function startServer() {
  try {
    await prisma.$connect();

    console.log("Database connected successfully via Prisma");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

startServer();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Prisma disconnected. Process exiting.");
  process.exit(0);
});

export default app;
