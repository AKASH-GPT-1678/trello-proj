import { FaChevronDown } from "react-icons/fa";
import { FaPoll } from "react-icons/fa";
import { GiPin } from "react-icons/gi";
import { FaBoltLightning } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
const SubHeader = () => {
    return (
        <div className="bg-fuchsia-700 flex flex-row p-3 justify-between">
            <div className="flex flex-row ">
                <p className="font-bold text-white">
                    My Trello Board
                </p>
                <div className=" p-1 flex flex-row items-center gap-2 ml-5 rounded-lg cursor-pointer mx-10">
                    <FaPoll size={24} fill="white" className="text-white rotate-180" />
                    <FaChevronDown size={16} fill="white" className="text-white" />

                </div>
            </div>
            <div>
                <div className="flex flex-row gap-4 items-center cursor-pointer">
                    <GiPin size={20} fill="white" className="text-white" />
                    <FaBoltLightning size={20} fill="white" className="text-white" />
                    <VscThreeBars size={20} fill="white" className="text-white" />
                    <FaRegStar size={20} fill="white" className="text-white" />
                    <BsPeople size={20} fill="white" className="text-white" />
                    <div className="flex flex-row gap-2 items-center bg-white p-1 rounded-lg ">
                        <RiContactsLine size={20} fill="black" className="text-white" />
                        <p>Share</p>

                    </div>
                    <BsThreeDots size={20} fill="white" className="text-white" />
                </div>
            </div>

        </div>
    )
}

export default SubHeader;
