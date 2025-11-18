import express from "express";
const router = express.Router();
import {createTask , updateTask , deleteTask , getTask , newBoard} from "../controllers/trello.controller.js";




export default router