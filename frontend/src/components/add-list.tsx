import { FaPlus } from "react-icons/fa6";


const AddNewList = () => {



    return (
        <div

            className="bg-white/25 backdrop-blur-2xl w-72 p-2 h-14 rounded-2xl cursor-pointer flex flex-row items-center gap-4 hover:bg-white/30 transition"
        >
            <FaPlus size={20} fill="white" className="text-white" />
            <p className="text-sm font-bold text-white">Add another list</p>
        </div>
    );
};

export default AddNewList;
