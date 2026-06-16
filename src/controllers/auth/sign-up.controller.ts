import type { Request, Response } from "express";

interface SignUpUser {
  email: string;
  password: string;
}

function signUpUser(req: Request, res: Response) {
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


    
}

export { signUpUser };
