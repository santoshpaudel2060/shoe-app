import express from "express";
import createComment from "../controller/comment.controller.js";
import getComment from "../controller/comment.controller.js";

const router = express.Router();

router.post("/", createComment);

router.get("/get", getComment);

export default router;
