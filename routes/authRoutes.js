import express from "express";

import { tokenValid } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/validate", tokenValid);

export default router;
