import axios from "axios";
export const createTask = async (req, res) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
    const { listId, title } = req.body;

    try {
        if (!listId || !title) {
            throw new Error("listId and title are required");
        }

        const url = `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

        const response = await axios.post(url, {
            idList: listId,
            name: title,
        });

        return res.status(200).json({
            success: true,
            card: response.data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error?.response?.data || error.message,
        });
    }
};


export const deleteTask = async (req, res) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
    const { cardId } = req.body

    try {
        if (!cardId) {
            throw new Error("cardId is required");
        }

        const url = `https://api.trello.com/1/cards/${cardId}?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

        const response = await axios.delete(url);

        return res.status(200).json({
            success: true,
            message: "Task deleted from Trello",
            data: response.data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error?.response?.data || error.message
        });
    }
};


export const updateTask = async (taskId, title) => {}

