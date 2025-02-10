import express from "express";

import {
  createImage,
  getImage,
  getUserImages,
  getImages,
} from "../controllers/imageControllers.js";

const router = express.Router();

router.post("/", createImage);
router.get("/:imageId", getImage);
router.get("/:userId", getUserImages);
router.get("/", getImages);

export default router;
