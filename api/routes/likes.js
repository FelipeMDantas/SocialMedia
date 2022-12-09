import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";

const router = express.Router();

router.get("/", getLikes);
router.get("/", addLike);
router.get("/", deleteLike);

export default router;
