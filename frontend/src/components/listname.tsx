import { RxCross2 } from "react-icons/rx";
const ListName = () => {
    return (
        <div className='rounded-2xl bg-gray-100 w-72 p-2 mt-2'>
            <input
                type="text"
                placeholder="Enter your name.."
                className="w-full  border-2 border-blue-600 rounded outline-none placeholder:text-sm placeholder:font-bold p-1 px-3"
            />
            <div className='flex flex-row gap-3 items-center'>
                <button className='font-bold text-sm flex items-center justify-center bg-blue-500 text-white px-3 py-1.5 rounded-sm  mt-2'>
                    Add List
                </button>
          
                    <RxCross2 size={20} fill="black" className=" mt-2 cursor-pointer hover:bg-gray-300" />
           
            </div>



        </div>
    )
}

export default ListName
