import type { Request, Response } from "express";
import Auth from "../../services/auth/index.js";
import hashPassword from "../../utils/hashPassword.js";
import type { SignUpUser } from "../../types/index.js";

const auth = new Auth();

async function signUpUser(req: Request, res: Response) {
  const { email, password }: SignUpUser = req.body;

  //validation
  if (email.trim() === "")
    return res.status(401).json({
      message: "Email is required",
      data: null,
    });

  if (password === "")
    return res.status(401).json({
      message: "Password is required",
      data: null,
    });

  // check if email already exists
  const checkEmail = await auth.checkEmail(email);
  if (checkEmail)
    return res.status(401).json({
      message: "Email Already exists",
      data: null,
    });

  // Hash password
  const passwordEncrypted = hashPassword(password);
}

export { signUpUser };
