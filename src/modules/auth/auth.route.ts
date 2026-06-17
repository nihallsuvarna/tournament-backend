import express from "express";
import { signInUser, signUpUser } from "./auth.controller.js";

const route = express.Router();

route.post("/", signUpUser);
route.get("/", signInUser);

export default route;
