import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { createBoard } from './controllers/trello.controller.js';
import router from './routes/router.js';
import { getAllBoards } from './controllers/trello.controller.js';
import { createTask, deleteTask } from './controllers/task.controller.js';
const app = express();
app.use(express.json());
app.use(cors());

// API routes
app.use("/api", router);

// test route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// create HTTP server
const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('create-board', (data) => {
         createBoard(data).then((response) => {
             console.log(response);
         });
    
    });
    socket.on('load-boards', () => {
        
    });
    socket.on("create-card", (data) => {
        
    });
    socket.on("delete-card", (data) => {
        console.log(data);
        deleteTask(data).then((response) => {
            console.log(response);
        })
    });



    socket.on("disconnect", () => {
        console.log("user Disconnected", socket.id);
    });
});



export default server;
