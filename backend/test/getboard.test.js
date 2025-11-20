import { getAllBoards } from "../controllers/trello.controller";

test("getAllBoards", async () => {
    const response = await getAllBoards();
    console.log(response);
    expect(response.success).toBe(true);
});