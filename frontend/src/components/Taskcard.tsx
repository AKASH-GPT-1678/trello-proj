import { BsArrowsAngleContract } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoImages } from "react-icons/io5";
import React from "react";
const TaskCard = () => {
    const [color, setColor] = React.useState('bg-green-200');
    return (
        <div className={`${color} w-72 p-4 rounded-2xl`}>
            <div className="flex justify-between items-center ">
                <p className="ml-1 font-bold text-sm">Today</p>
                <div className="flex flex-row gap-4 justify-between">
                    <BsArrowsAngleContract size={15} fill="black" className="rotate-45" />
                    <BsThreeDots size={15} fill="black" className="text-white" />
                </div>

            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-row gap-2 items-center  cursor-pointer hover:bg-yellow-300 rounded-lg w-full p-2 ">


                    <FaPlus size={14} fill="black" className="text-white" />
                    <p className="text-sm font-semibold text-gray-600">Add a card</p>
                </div>
                <div className="flex flex-row gap-2 items-center cursor-pointer ml-4 rounded-lg hover:bg-yellow-300 p-2 px-3">
                    <IoImages size={15} fill="black" className="text-white" />

                </div>

            </div>

        </div>
    )
}
export default TaskCard;