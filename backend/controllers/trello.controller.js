// ...existing code...
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function createTask(req, res) {
    
}

async function updateTask(req, res) {
    
}

async function deleteTask(req, res) {
    
}

async function getTask(req, res) {
    
}

async function newBoard(req, res) {
    console.log(req.user);
    if(!req.user) return res.status(401).json({ message: "Unauthorized" });
    const { title } = req.body;
    console.log("i am ",req.user);

    try {
        const newBoard = await prisma.board.create({
            data: {
                title : title,
                users: {
                    connect: {
                        id: req.user.id
                    }
                }
            }
        });

        return res.status(201).json({ message: "Board created", board: newBoard ,success : true});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" ,success : false});
        
    }
    
}
async function getBoards(req ,res) {
    if(!req.user) return res.status(401).json({ message: "Unauthorized" });
    try {
        const boards = await prisma.board.findMany({
            where: {
                users: {
                    some: {
                        id: req.user.id
                    }
                }
            }
        });
        return res.status(200).json({ message: "Boards fetched", boards });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
        
    }
    
}

export {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    newBoard,
    getBoards
}