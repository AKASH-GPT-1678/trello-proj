import express from "express";
const router = express.Router();
import axios from "axios";
import { getAllBoards } from "../controllers/trello.controller.js";



router.get("/boards/:boardId/lists", async (req, res) => {
    const TRELLO_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_TOKEN = process.env.TRELLO_API_TOKEN;
    try {
        const { boardId } = req.params;

        const url = `https://api.trello.com/1/boards/${boardId}/lists?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`;

        const response = await axios.get(url);

        console.log(response.data);
        return res.json(response.data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch lists" });
    }
});

export default router;

