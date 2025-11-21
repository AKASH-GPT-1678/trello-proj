import { createBoard } from "./getboard";

describe("createBoard", () => {
    it("should create a board", async () => {
        const boardName = "National Board"
        const board = await createBoard(boardName);
        expect(board).toBeDefined();
        expect(board.success).toBe(true);
    
    })
})