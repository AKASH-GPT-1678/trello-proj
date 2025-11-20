import server from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT =  5000;

server.listen(PORT, () => {
    console.log(process.env.TRELLO_API_KEY);
    console.log(`Server started on port http://localhost:${PORT}`);
});
