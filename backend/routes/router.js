import express from "express";
const router = express.Router();
import { newBoard, getBoards, newList } from "../controllers/trello.controller.js";
import { registerUser, loginUser, checkToken } from "../controllers/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-token", checkToken);
router
    .route("/boards")
    .post(newBoard)
    .get(getBoards);

router.route("/lists")
    .post(newList)
    .get(getBoards);



export default router