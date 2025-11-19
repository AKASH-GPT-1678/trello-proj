import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createTask(req, res) {
    try {

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const { title, listId } = req.body;

        if (!title || !listId) {
            return res.status(400).json({
                message: "Title and listId are required"
            });
        }


        const list = await prisma.list.findUnique({
            where: { id: listId }
        });

        if (!list) {
            return res.status(404).json({
                message: "List not found"
            });
        }


        const newCard = await prisma.card.create({
            data: {
                title,
                listId
            }
        });

        return res.status(201).json({
            message: "Task created successfully",
            card: newCard,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
export async function updateTask(req, res) {
    

}
export async function deleteTask(req, res) {

}

export async function getTask(req, res) {

}