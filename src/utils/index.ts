import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import type { SignUpUser } from "../types/index.js";

dotenv.config();

export function hashPassword(password: string) {
  return bcrypt.hash(password, Number(process.env.SALT) || 10);
}

export function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}

export function signWithJWT(data: SignUpUser) {
  const SECRET_KEY: string = process.env.SECRET_KEY || "this is my password";
  return jwt.sign(data, SECRET_KEY, { expiresIn: "1h" });
}
