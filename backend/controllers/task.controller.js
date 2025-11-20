import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import axios from "axios";
export const createTask = async (listId, title) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;

    try {
        if (!listId || !title) {
            throw new Error("listId and title are required");
        }

        const url = `https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

        const response = await axios.post(url, {
            idList: listId,
            name: title,
        });

        return {
            success: true,
            card: response.data,
        };
    } catch (error) {
        return {
            success: false,
            error: error?.response?.data || error.message,
        };
    }
};


export const deleteTask = async (cardId) => {
    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;

    try {
        if (!cardId) {
            throw new Error("cardId is required");
        }

        const url = `https://api.trello.com/1/cards/${cardId}?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`;

        const response = await axios.delete(url);

        return {
            success: true,
            message: "Task deleted from Trello",
            data: response.data
        };

    } catch (error) {
        return {
            success: false,
            error: error?.response?.data || error.message
        };
    }
};


export const updateTask = async (taskId, title) => {}

export async function getTask(req, res) {

}