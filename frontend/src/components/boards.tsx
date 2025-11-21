import React from "react";
import { Plus } from "lucide-react";
import CreateBoardForm from "./create-board";

export interface Board {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

const NewBoard = () => {
  const [myBoards, setMyBoards] = React.useState<any[]>([]);
  const [showForm, setShowForm] = React.useState(false);

  const loadBoards = async () => {
    try {
      const reponse = await fetch("http://localhost:5000/api/boards");
      const data = await reponse.json();
      if (data.success) {
        console.log(data);
    
      }
      setMyBoards(data.boards);

    } catch (error) {
      console.log(error);

    }

  };

  React.useEffect(() => {
    loadBoards();
  }, []);







  return (
    <div className="relative p-4">

      <button className="px-4 py-3 bg-blue-500 text-sm font-bold text-white rounded-lg cursor-pointer" onClick={loadBoards}> Load Boards</button>
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
      >
        <Plus className="text-white" size={28} />
      </button>


      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-xl shadow-xl w-[90%] max-w-md">
            <CreateBoardForm
              onCreated={() => {
                setShowForm(false);
              }}
            />

            {/* Close Button */}
            <button
              className="mt-3 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}


      <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"


      >
        {myBoards && myBoards.map((board) => (
          <div
            key={board.id}
            onClick={() => window.location.href = `/board-view?id=${board.id}`}
            className="bg-white/10 backdrop-blur-lg border cursor-pointer border-white/20 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-black">
              {board.name}
            </h2>

            <p className="text-sm text-gray-300">
              {board.id}
            </p>


          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBoard;
