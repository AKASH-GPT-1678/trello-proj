import axios from "axios";



export const createBoard = async (req, res) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
    console.log(TRELLO_API_KEY, TRELLO_API_TOKEN);
    const { boardName } = req.body
    try {
        if (!boardName) {
            throw new Error("Board name is required");
        }
        console.log(boardName);

        const url = `https://api.trello.com/1/boards/?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}&name=${encodeURIComponent(boardName)}`;

        const response = await axios.post(url);

        return res.status(200).json({
            success: true,
            board: response.data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error?.response?.data || error.message,
        });
    }
};

export const getAllBoards = async (req, res) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
    console.log(TRELLO_API_KEY, TRELLO_API_TOKEN);

    try {
        if (!TRELLO_API_KEY || !TRELLO_API_TOKEN) {
            throw new Error("Missing Trello API credentials");
        }

        const url = `https://api.trello.com/1/members/me/boards?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

        const response = await axios.get(url);
        const minimalBoards = response.data.map((b) => ({
            id: b.id,
            name: b.name,
            url: b.url,
            shortUrl: b.shortUrl,

            idOrganization: b.idOrganization,
            closed: b.closed,
        }));


        return res.status(200).json({
            success: true,
            boards: minimalBoards,
        });
    } catch (error) {
        return {
            success: false,
            error: error?.response?.data || error.message,
        };
    }
};
export const getListsAndCards = async (req, res) => {
    const TRELLO_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_TOKEN = process.env.TRELLO_API_TOKEN;
    const { boardId } = req.params;

    try {

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

        return res.status(200).json({
            success: true,
            data: listsWithCards,
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err?.response?.data || err.message,
        });
    }
};