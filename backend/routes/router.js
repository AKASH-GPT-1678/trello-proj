import express from "express";
const router = express.Router();
import axios from "axios";
import { createBoard, getAllBoards, getListsAndCards } from "../controllers/trello.controller.js";
import { createTask, deleteTask, updateTask } from "../controllers/task.controller.js";



router.route("/boards")
    .post(createBoard)
    .get(getAllBoards);



router.get("/board/:boardId/lists", getListsAndCards);

router
    .route("/tasks")
    .post(createTask)
    .delete(deleteTask)
    .put(updateTask)

export default router;

