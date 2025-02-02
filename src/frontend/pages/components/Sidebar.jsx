import { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdGlobe } from "react-icons/io";
import { MdOutlineTravelExplore, MdOutlineAddchart, MdOutlineThumbUpAlt, MdOutlineThumbDown } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HiPlus } from "react-icons/hi2";

import { Link } from 'react-router-dom';



function Sidebar({ className }) {

    const [customFeedsAccordion, setCustomFeedsAccordion] = useState(false);
    const [recentAccordion, setRecentAccrecentAccordion] = useState(false);
    const [communitiesAccordion, setRecentAcccommunitiesAccordion] = useState(false);



    return (
        <aside className={` ${className}`}>
            {/* scrollable sidebar */}
            <div className=' h-full flex flex-col px-5 bg-green-40'>
                {/* home, popular, explore, all */}
                <div className='flex flex-col justify-center p-3 text-xl border-b'>

                    <Link to={'/'} className='flex justify-start items-center gap-2  cursor-pointer hover:bg-gray-200 p-3'>
                        <span> <IoHomeOutline /></span>
                        <span>Home</span>
                    </Link>

                    <div className='flex justify-start items-center gap-2  cursor-pointer hover:bg-gray-200 p-3'>
                        <span><IoMdGlobe /></span>
                        <span>Popular</span>
                    </div>

                    <div className='flex justify-start items-center gap-2  cursor-pointer hover:bg-gray-200 p-3'>
                        <span><MdOutlineTravelExplore /></span>
                        <span>Explore</span>
                    </div>

                    <div className='flex justify-start items-center gap-2  cursor-pointer hover:bg-gray-200 p-3'>
                        <span><MdOutlineAddchart /></span>
                        <span>All</span>
                    </div>

                </div>


                {/* CUSTOM FEEDS */}
                <div className='flex flex-col justify-center px-3 text-xl border-b select-none py-5'>

                    <div className='flex justify-between items-center cursor-pointer hover:bg-gray-200 p-3 '
                        onClick={() => setCustomFeedsAccordion((prevState) => !prevState)}
                    >
                        <span className='text-sm'>CUSTOM FEEDS</span>
                        <span className={`text-gray-300 transition-all duration-200 ${customFeedsAccordion ? 'rotate-180' : ''}`}><FaAngleDown /></span>
                    </div>

                    <div className={`  cursor-pointer hover:bg-gray-200 ${customFeedsAccordion ? 'overflow-auto' : 'h-0 overflow-hidden'} `}>
                        <div className='flex justify-start items-center w-full  p-3 '>
                            <span className='text-2xl'> <HiPlus /></span>
                            <span className='text-lg'>Create a custom feed</span>
                        </div>

                    </div>

                </div>


                {/* Recent */}
                <div className='flex flex-col justify-center px-3 text-xl border-b select-none py-5'>

                    <div className='flex justify-between items-center cursor-pointer hover:bg-gray-200 p-3 '
                        onClick={() => setRecentAccrecentAccordion((prevState) => !prevState)}
                    >
                        <span className='text-sm'>RECENT</span>
                        <span className={`text-gray-300 transition-all duration-200 ${recentAccordion ? 'rotate-180' : ''}`}><FaAngleDown /></span>
                    </div>

                    <div className={`  cursor-pointer transition-all duration-500 ${recentAccordion ? 'overflow-auto' : 'h-0 overflow-hidden'} `}>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/technepal</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Nepal</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Programming</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/funny</span>
                        </div>
                    </div>

                </div>


                {/* Communities */}
                <div className='flex flex-col justify-center px-3 text-xl border-b select-none py-5'>

                    <div className='flex justify-between items-center cursor-pointer hover:bg-gray-200 p-3 '
                        onClick={() => setRecentAcccommunitiesAccordion((prevState) => !prevState)}
                    >
                        <span className='text-sm'>COMMUNITIES</span>
                        <span className={`text-gray-300 transition-all duration-200 ${communitiesAccordion ? 'rotate-180' : ''}`}><FaAngleDown /></span>
                    </div>

                    <div className={`  cursor-pointer transition-all duration-500  ${communitiesAccordion ? 'overflow-auto' : 'h-0 overflow-hidden'} `}>
                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Soccer</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/CRT</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Gaming</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Keyboards</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Mice</span>
                        </div>
                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Soccer</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/CRT</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Gaming</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Keyboards</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Mice</span>
                        </div>
                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Soccer</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/CRT</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Gaming</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Keyboards</span>
                        </div>

                        <div className='flex justify-start items-center gap-2 hover:bg-gray-200 p-3'>
                            <span className='h-7 w-7 bg-green-400 rounded-full'></span>
                            <span className='text-lg'>r/Mice</span>
                        </div>





                    </div>

                </div>




            </div>

        </aside>
    )
}

export default Sidebar