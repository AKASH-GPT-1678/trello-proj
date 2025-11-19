import { BsArrowsAngleContract, BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoImages } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import React from "react";

interface TaskCardProps {
    listId: string;
}

const TaskCard = ({ listId }: TaskCardProps) => {
    const [color] = React.useState("bg-green-200");
    const [showCard, setShowCard] = React.useState(true);
    const [taskTitle, setTaskTitle] = React.useState("");

    const addTask = async () => {
        if (!taskTitle.trim()) return;

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found");
                return;
            }

            const res = await fetch("http://localhost:5000/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title: taskTitle,
                    listId: listId,
                }),
            });

            const data = await res.json();
            console.log("Task Created:", data);

            // reset UI
            setTaskTitle("");
            setShowCard(true);

        } catch (err) {
            console.error("Error adding task:", err);
        }
    };

    return (
        <div className={`${color} w-72 p-4 rounded-2xl`}>
            <div className="flex justify-between items-center">
                <p className="ml-1 font-bold text-sm">Today</p>
                <div className="flex flex-row gap-4">
                    <BsArrowsAngleContract size={15} className="rotate-45" />
                    <BsThreeDots size={15} />
                </div>
            </div>

            {showCard ? (
                <div className="flex flex-row justify-between mt-4">
                    <div
                        onClick={() => setShowCard(false)}
                        className="flex flex-row gap-2 items-center cursor-pointer hover:bg-yellow-300 rounded-lg w-full p-2"
                    >
                        <FaPlus size={14} />
                        <p className="text-sm font-semibold text-gray-800">Add a card</p>
                    </div>

                    <div className="flex items-center ml-4 cursor-pointer rounded-lg hover:bg-yellow-300 p-2 px-3">
                        <IoImages size={15} />
                    </div>
                </div>
            ) : (
                <div className="w-full mt-3">
                    <textarea
                        rows={2}
                        className="w-full p-2 outline-none ring-2 rounded-xl ring-blue-500 text-sm"
                        placeholder="Enter task title..."
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                    />

                    <div className="flex flex-row gap-4 mt-2 items-center">
                        <button
                            onClick={addTask}
                            className="px-4 py-2 rounded-md text-white text-sm font-bold bg-blue-600 hover:bg-blue-700"
                        >
                            Add Card
                        </button>

                        <RxCross2
                            size={20}
                            className="cursor-pointer hover:bg-gray-300 p-1 rounded-full"
                            onClick={() => {
                                setShowCard(true);
                                setTaskTitle("");
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
