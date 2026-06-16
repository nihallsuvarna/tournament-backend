import type { Request, Response } from "express";
import Auth from "../../services/auth/index.js";
import {
  hashPassword,
  signWithJWT,
  verifyPassword,
} from "../../utils/index.js";
import type { SignUpUser } from "../../types/index.js";

const auth = new Auth();

async function signUpUser(req: Request, res: Response) {
  try {
    const { email, password }: SignUpUser = req.body;

    //validation
    if (email.trim() === "") {
      return res.status(401).json({
        message: "Email is required",
        data: null,
      });
    }

    if (password.trim() === "" || password.length < 8) {
      return res.status(401).json({
        message: "Password should be at least 8 character",
        data: null,
      });
    }

    // check if email already exists
    const checkEmail = await auth.checkEmail(email);
    if (checkEmail) {
      return res.status(401).json({
        message: "Email Already exists",
        data: null,
      });
    }

    // Hash password
    const passwordEncrypted = await hashPassword(password);

    const signUp = await auth.addUser({
      ...req.body,
      password: passwordEncrypted,
    });

    if (!signUp) {
      return res.status(500).json({
        message: "Something went wrong in the server",
        data: null,
      });
    }

    return res.status(201).json({
      message: "User Added Successfully",
      data: req.body,
    });
  } catch (error) {
    return res.status(501).json({
      message: error,
      data: null,
    });
  }
}

async function signUp(req: Request, res: Response) {
  try {
    const { email, password }: SignUpUser = req.body;

    if (email.trim() === "") {
      return res.status(500).json({
        message: "Email is required",
        data: null,
      });
    }

    if (password.trim() === "" || password.length < 8) {
      return res.status(401).json({
        message: "Password should be at least 8 character",
        data: null,
      });
    }

    // Check if password match
    const user = await auth.checkEmail(email);
    if (!user) {
      return res.status(501).json({
        message: "Something went wrong while fetching the data",
      });
    }

    const compare = await verifyPassword(password, user.password);
    if (!compare) {
      return res.status(404).json({
        message: "Password not matching",
        data: null,
      });
    }

    const token = signWithJWT(req.body);

    return res.status(200).json({
      message: "Login Successful",
      data: { ...req.body, token },
    });
  } catch (error) {
    return res.status(501).json({
      message: error,
      data: null,
    });
  }
}

export { signUpUser, signUp };
