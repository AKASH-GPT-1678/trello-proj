import express from "express";
const router = express.Router();
import { createTask, updateTask, deleteTask, getTask, newBoard, getBoards } from "../controllers/trello.controller.js";
import { registerUser, loginUser, checkToken } from "../controllers/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-token", checkToken);
router
  .route("/boards")
  .post(newBoard)
  .get(getBoards);




export default router