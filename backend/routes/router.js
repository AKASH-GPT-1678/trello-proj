import express from "express";
const router = express.Router();
import { newBoard, getBoards, newList, getBoardDetails } from "../controllers/trello.controller.js";
import { registerUser, loginUser, checkToken } from "../controllers/auth.controller.js";
import { createTask, getTask ,deleteTask} from "../controllers/task.controller.js";
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



router.route("/tasks")
    .post(createTask)
    .get(getTask)
    .delete(deleteTask)
   

router.route("/board-view")
    .get(getBoardDetails);

export default router