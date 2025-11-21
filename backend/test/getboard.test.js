import { getAllBoards } from "./myboards";
describe("getAllBoards", () => {
    it("should get all boards", async () => {
        const boards = await getAllBoards();
        expect(boards).toBeDefined();
        expect(boards.success).toBe(true);
       
    })
})