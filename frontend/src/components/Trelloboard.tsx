import React from "react"
import Header from "./header"

import SubHeader from "./Subheader"
import { type Board } from "../types/board"
import { useSearchParams } from "react-router-dom"
import ListCard from "./listcard"

const TrelloBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [boardId, setBoardId] = React.useState("");
  const [board ,setBoard] = React.useState<Board | null>(null);
  const id = searchParams.get("id");
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if(!id || !token) return
    const loadBoard = async (boardId : string, token : string) => {
      try {
        const response = await fetch(`http://localhost:5000/api/board-view?id=${boardId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Failed to load board");
        }

        const data = await response.json();
        console.log(data);
        setBoard(data.board);
        return data;         
      } catch (error :any) {
        console.error("Error in loadBoard:", error.message);
        return null;
      }
    };
    loadBoard(id, token)


  }, [id])
  if (!id) {
    return null;
  }

  return (
    <div className="h-[100vh] bg-gradient-to-b from-violet-500 to-pink-500 ">
      <Header />
      <SubHeader />
      <div className="flex gap-4 ">
        {
          board?.lists && board.lists.map((list) => (
            <ListCard key={list.id} listId={list.id} listName={list.title} cards={list.cards} />
          ))
        
        }
        
      </div>

    </div>


  )

}

export default TrelloBoard