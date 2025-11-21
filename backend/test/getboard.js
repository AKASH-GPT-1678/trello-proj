import axios from "axios";
import 'dotenv/config';


export async function createBoard(boardName) {
    if (!boardName) {
        throw new Error("Board name is required");
    };
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;


    const url = `https://api.trello.com/1/boards/?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}&name=${encodeURIComponent(boardName)}`;

    try {
        const response = await axios.post(url);
        console.log(response.data);
        return {
            success: true,
            board: response.data,
        };
    } catch (error) {

        throw new Error(error?.response?.data || error.message);
    }
}

