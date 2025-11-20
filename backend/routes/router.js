import express from "express";
const router = express.Router();
import axios from "axios";




router.get("/boards/:boardId/lists", async (req, res) => {
    const TRELLO_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_TOKEN = process.env.TRELLO_API_TOKEN;

    try {
        const { boardId } = req.params;

      
        const listsUrl = `https://api.trello.com/1/boards/${boardId}/lists?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`;
        const listsResponse = await axios.get(listsUrl);

        const lists = listsResponse.data;

       
        const listsWithCards = await Promise.all(
            lists.map(async (list) => {
                const cardsUrl = `https://api.trello.com/1/lists/${list.id}/cards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`;

                const cardsResponse = await axios.get(cardsUrl);

                return {
                    ...list,
                    cards: cardsResponse.data, 
                };
            })
        );

    
        return res.json({
            success: true,
            lists: listsWithCards,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch lists and cards" });
    }
});


export default router;

