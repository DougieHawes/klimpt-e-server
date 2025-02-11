import express from "express";

import auth from "../middleware/auth.js";
import {
  createImage,
  getImage,
  getUserImages,
  getImages,
} from "../controllers/imageControllers.js";

const router = express.Router();

router.post("/", auth, createImage);
router.get("/:imageId", auth, getImage);
router.get("/:userId", auth, getUserImages);
router.get("/", auth, getImages);

export default router;
