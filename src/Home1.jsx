// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FcAdvertising } from "react-icons/fc";
import { faRectangleAd, } from '@fortawesome/free-solid-svg-icons';

// react icons 
import { FcAdvertising } from "react-icons/fc";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPlus, FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";



function Home1() {
    return (
        <div className="bg-gray-20 min-h-screen  min-w-screen">

            {/* div containing banner, main and footer */}
            <div className="min-h-screen max-h-fit grid grid-rows-11 bg-green-40 gap">


                {/* banner section */}

                <div className="bg-yellow-100 row-span-1 bg-fixed flex items-center px-3 border-b-[1px] border-gray-400 ">

                    <div className=" bg-red-400 flex items-center justify-between w-full h-full ">

                        <div className="flex-1">
                            BlogThread
                        </div>


                        <div className="flex-1 relative flex items-center">
                            <input type="text" className="border w-[100%] bg-custom-gray rounded-full p-1 pl-12 pr-3 border-gray-400 focus:outline-none focus:bg-white focus:border-blue-500" placeholder='Search' />
                            <span className='absolute left-5 pointer-events-none'> <CiSearch className='text-lg' /></span>
                        </div>


                        {/* right profile and messages */}

                        <div className="flex-1 bg-blue-40 h-full flex items-center justify-end relative">
                            <div className="flex items-center justify-end gap-2">
                                <span className='cursor-pointer hover:bg-slate-400 delay-75 rounded-full p-2'>
                                    <FcAdvertising className="text-2xl" />
                                </span>

                                <span className='cursor-pointer hover:bg-slate-400 delay-75 rounded-full p-2'>
                                    <AiOutlineMessage className='text-2xl' />
                                </span>

                                <span className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center gap-2 rounded-full p-2 '><FaPlus />
                                    Create
                                </span>

                                <span className='cursor-pointer hover:bg-slate-400 delay-75 p-2 rounded-full'>
                                    <FaRegBell className='text-2xl' />
                                </span>

                                <span className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center h-10 w-10 p-[2px] rounded-full relative'>
                                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" className='object-cover h-full w-full rounded-full' alt="" />


                                </span>



                            </div>
                        </div>



                    </div>






                </div>

                {/* drop down */}
                {/* <div className='flex flex-col w-48 rounded-lg py-2 bg-slate-300 text-gray-800 shadow-lg absolute'>
                  <span className='px-5 py-1 hover:bg-indigo-500 hover:text-white cursor-pointer'>View Profile</span>
                  <span className='px-5 py-1 hover:bg-indigo-500 hover:text-white cursor-pointer'>Edit Avatar</span>
                  <span className='px-5 py-1 hover:bg-indigo-500 hover:text-white cursor-pointer'>Dark Mode</span>
                </div> */}


                {/* main section */}
                <div className="bg-pink-100 row-span-9">

                    {/* Sidebar */}


                    {/* main content */}


                    {/* right side */}
                </div>

                {/* end of main section */}





                {/* footer section starts from here */}
                <div className="bg-slate-500 row-span-1">
                    Footer
                </div>

                {/* end of footer section */}

            </div>



        </div>
    )
}

export default Home1