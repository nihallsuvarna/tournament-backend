import type { Request, Response, NextFunction } from "express";

export default function checkRole(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next();
}
