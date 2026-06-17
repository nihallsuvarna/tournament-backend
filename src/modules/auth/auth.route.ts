import express from "express";
import { signInUser, signUpUser } from "./auth.controller.js";

const route = express.Router();

route.post("/sign-up", signUpUser);
route.get("/sign-in", signInUser);

export default route;
