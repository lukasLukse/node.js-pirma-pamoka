import express from "express";
import { SIGN_UP } from "../controller/user.js";

const router = express.Router();

router.post("/signup", SIGN_UP);

export default router;
