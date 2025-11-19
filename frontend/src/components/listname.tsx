import { RxCross2 } from "react-icons/rx";
import React from "react";
import { useSearchParams } from "react-router-dom";
const ListName = () => {
    const [listName, setListName] = React.useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const boardId = searchParams.get("id");
    const createList = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token || listName === "") {
                console.log("No token found");
                return;
            }

            const res = await fetch("http://localhost:5000/api/lists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: listName,
                    boardId : boardId
                })
            });

            const data = await res.json();
            console.log("List created:", data);

        } catch (error) {
            console.error("Error creating list:", error);
        }
    };
    return (
        <div className='rounded-2xl bg-gray-100 w-72 p-2 mt-2'>
            <input
                type="text"
                placeholder="Enter your name.."
                onChange={(e) => setListName(e.target.value)}
                className="w-full  border-2 border-blue-600 rounded outline-none placeholder:text-sm placeholder:font-bold p-1 px-3"
            />
            <div className='flex flex-row gap-3 items-center'>
                <button className='font-bold text-sm flex items-center justify-center bg-blue-500 text-white px-3 py-1.5 rounded-sm  mt-2'

                    onClick={createList}>
                    Add List
                </button>

                <RxCross2 size={20} fill="black" className=" mt-2 cursor-pointer hover:bg-gray-300" />

            </div>



        </div>
    )
}

export default ListName
