import React from "react"
import Header from "./header"

import SubHeader from "./Subheader"
import { type Board } from "../types/board";
import { useSearchParams } from "react-router-dom";

import ListCard from "./listcard"
import AddNewList from "./add-list"
import { useSocket } from "./socket";

const TrelloBoard = () => {

  const  [searchParams , setSearchParams]= useSearchParams();
  const boardId = searchParams.get("id");
  const [board, setBoard] = React.useState<any>(null);
  const {socket} = useSocket();
  React.useEffect(() => {
    if (!boardId) return;

    const fetchBoard = async () => {
      const res = await fetch(`http://localhost:5000/api/boards/${boardId}/lists`);
      const data = await res.json();
      console.log(data);
      setBoard(data);
    };

    fetchBoard();
  }, [boardId]);







  return (
    <div className="h-[100vh] bg-gradient-to-b from-violet-500 to-pink-500 ">
      <Header />
      <SubHeader />
      <div className="flex gap-4 ">
        {
          board?.lists && board.lists.map((list :any) => (
            <ListCard key={list.id} listId={list.id} listName={list.title} cards={list.cards} />
          ))

        }

      </div>
      <AddNewList />


    </div>


  )

}

export default TrelloBoard