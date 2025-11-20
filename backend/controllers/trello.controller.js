import axios from "axios";



export const createBoard = async (boardName) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
    console.log(TRELLO_API_KEY, TRELLO_API_TOKEN);
    try {
        if (!boardName) {
            throw new Error("Board name is required");
        }
        console.log(boardName);

        const url = `https://api.trello.com/1/boards/?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}&name=${encodeURIComponent(boardName)}`;

        const response = await axios.post(url);

        return {
            success: true,
            board: response.data,
        };
    } catch (error) {
        return {
            success: false,
            error: error?.response?.data || error.message,
        };
    }
};

export const getAllBoards = async () => {
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


        return {
            success: true,
            boards: minimalBoards,
        };
    } catch (error) {
        return {
            success: false,
            error: error?.response?.data || error.message,
        };
    }
};