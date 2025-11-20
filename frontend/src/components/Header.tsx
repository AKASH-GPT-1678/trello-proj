import React from "react";
import { BiCategory } from "react-icons/bi";
import { GiFallingStar } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";
import { CiBellOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [start, setStart] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            if (start) {
                setOpen(!open)
            }
        }, 300)


    }, [start, open])
    return (
        <header className="bg-purple-500 p-3 w-full">
            <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-row gap-2">


                    <BiCategory size={20} fill="white" />
                    <div className="bg-white h-6 w-8 p-1 flex justify-center gap-1 cursor-pointer rounded-sm"
                        onMouseEnter={() => setStart(true)}
                        onMouseLeave={() => setStart(false)}

                    >
                        <div className={`${open ? 'h-2' : 'h-4'} w-[30%] bg-purple-500`}></div>
                        <div className={`${open ? 'h-4' : 'h-2'} w-[30%] bg-purple-500`}></div>

                    </div>
                </div>
                <div className="w-[40%] flex gap-2 ">
                    <input type="text" placeholder="Search" className="p-1 w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-md placeholder:text-white  active:placeholder:text-gray-400 active:bg-white focus:outline-blue-600"
                    />
                    <button className="text-sm p-1 text-white font-bold cursor-pointer  bg-white/20 backdrop-blur-md px-3 rounded-lg ">
                        Create
                    </button>


                </div>

                <div className="flex flex-row gap-2 items-center justify-center">
                    <div>
                        <p className="text-white text-sm font-bold px-3 border-2 py-1 rounded-sm flex flex-row gap-1 cursor-pointer"> <GiFallingStar size={16} />12 Days left</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <GrAnnounce size={30} className=" text-white hover:backdrop-blur-xl hover:bg-white/20 p-1 cursor-pointer" />
                        <CiBellOn size={30} fill="white" className=" text-white hover:backdrop-blur-xl hover:bg-white/20 p-1 cursor-pointer" />
                        <IoIosHelpCircleOutline size={30} className=" text-white hover:backdrop-blur-xl hover:bg-white/20 p-1 cursor-pointer" />

                    </div>
                </div>
            </div>
        </header >
    )
};

export default Header;