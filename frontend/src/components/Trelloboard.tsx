import React from "react"
import Header from "./header"

import SubHeader from "./Subheader"

import { useSearchParams } from "react-router-dom";

import ListCard from "./listcard"
import AddNewList from "./add-list"

export interface TrelloList {
  id: string;
  idBoard: string;
  name: string;
  closed: boolean;
  pos: number;
  subscribed: boolean;
  softLimit: number | null;
  type: string | null;
  color: string | null;
  cards: any[];
  datasource?: {
    filter: boolean;
  } | null;
}


const TrelloBoard = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const boardId = searchParams.get("id");
  const [lists, setLists] = React.useState<TrelloList[]>([]);

  React.useEffect(() => {
    if (!boardId) return;

    const fetchBoard = async () => {
      const res = await fetch(`http://localhost:5000/api/boards/${boardId}/lists`);
      const data = await res.json();
      console.log(data.lists);
      setLists(data.lists);
    };

    fetchBoard();
  }, [boardId]);







  return (
    <div className="h-[100vh] bg-gradient-to-b from-violet-500 to-pink-500 ">
      <Header />
      <SubHeader />
      <div className="flex gap-4 overflow-x-auto p-4">
        {lists?.map((list) => (
          <ListCard key={list.id} listId={list.id} listName={list.name} cards={list.cards} />
        ))}
      </div>

      <AddNewList />


    </div>


  )

}

export default TrelloBoard