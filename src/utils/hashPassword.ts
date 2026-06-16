import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export default function hashPassword(password: string) {
  return bcrypt.hash(password, Number(process.env.SALT) || 10);
}
