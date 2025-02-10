import express from "express";

import { createUser, signinUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);

export default router;
