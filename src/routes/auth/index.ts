import express from "express";
import { signUpUser } from "../../controllers/auth/index.js";

const route = express.Router();

route.post("/", signUpUser);

export default route;
