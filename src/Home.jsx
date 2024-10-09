// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FcAdvertising } from "react-icons/fc";
import { faRectangleAd, } from '@fortawesome/free-solid-svg-icons';

// react icons 
import { FcAdvertising } from "react-icons/fc";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPlus, FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { useEffect, useRef, useState } from 'react';



function Home() {

    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleNotification, setToggleNotification] = useState(false);

    const profileButtonRef = useRef(null)       // returns object: {current: null}
    const profileDropDownRef = useRef(null);

    const notificationButtonRef = useRef(null);
    const notificationDropDownRef = useRef(null);




    useEffect(() => {

        document.addEventListener('mousedown', (e) => {

            console.log(e.target);

            // console.log(e.target);
            // if mouse click is registered from everywhere but profile button and its dropdown
            if ((profileButtonRef.current && !profileButtonRef.current.contains(e.target)) &&   // if profile button is not clicked
                (profileDropDownRef.current && !profileDropDownRef.current.contains(e.target))   // if profile button dropdown is not clicked

            ) {
                setToggleProfile(false)
                // setToggleNotification(false);
            }
            (notificationButtonRef.current && !notificationButtonRef.current.contains(e.target))    // if notification button is not clicked

            if (notificationButtonRef.current && !notificationButtonRef.current.contains(e.target) &&   // if notification button is not clicked
                (notificationDropDownRef.current && !notificationDropDownRef.current.contains(e.target))    // if the drop down is not clicked, close the dropdown
            ) {
                setToggleNotification(false);
            }

        });
    }, []);



    return (
        <div>

            <div className='min-h-screen bg-red-400 grid grid-rows-[auto,1fr,auto] '>


                {/* header */}
                <header className='bg-blue-400 h-16 relative'>
                    <nav className='h-full bg-green-400  border-b-2 border-black px-4'>
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

                                    <span ref={notificationButtonRef} className='cursor-pointer hover:bg-slate-400 delay-75 p-2 rounded-full'
                                        onClick={() => { setToggleNotification(prevState => !prevState) }}>
                                        <FaRegBell className='text-2xl' />
                                    </span>

                                    <button ref={profileButtonRef} className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center h-10 w-10 p-[2px] rounded-full relative select-none'
                                        onClick={() => { setToggleProfile(prevState => !prevState) }}>
                                        <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" className='object-cover h-full w-full rounded-full' alt="" />


                                    </button>



                                </div>
                            </div>



                        </div>
                        {/* <div className='h-[1px] bg-black'>
                        
                    </div> */}

                    </nav>
                </header>



                <main className='bg-orange-400 relative'>

                    {/* Drop down menus */}
                    {/* Profile drop down */}
                    {
                        toggleProfile ?
                            <div ref={profileDropDownRef} className='flex flex-col w-60 rounded-lg py-2 bg-slate-300 text-gray-800 shadow-lg absolute right-4 px-2'>
                                <span className='px-5 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer border-b border-gray-500 '>View Profile</span>
                                <span className='px-5 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Edit Avatar</span>
                                <span className='px-5 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer flex justify-between items-center'>
                                    <span>Dark Mode</span>
                                    <span><input type="checkbox" className='' /></span>
                                </span>
                                <span className='px-5 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Log Out</span>
                                <hr />
                                <span className='px-5 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Settings</span>

                            </div>
                            : <></>
                    }

                    {/* Notification drop down */}
                    {
                        toggleNotification ?
                            <div ref={notificationDropDownRef} className='flex flex-col w-96 rounded-lg py-2 bg-white text-gray-800 shadow-lg absolute right-4 select-none max-h-[472px] overflow-y-auto bg-pink-50'>

                                <maindiv className="flex flex-col">
                                    <div className='flex flex-col gap-4 bg-gree-400 m-5 max-h-[470px]'>

                                        {/* notification row */}
                                        <div className='grid grid-cols-12 p-1'>

                                            {/* prefix */}
                                            <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                                Image
                                            </div>

                                            {/* middle part */}
                                            <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                                <div className=''>
                                                    <span className='text-gray-800'>Notification title</span>
                                                    <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                                </div>

                                            </div>

                                            {/* end option part */}
                                            <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                                <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                    <SlOptions className='= rounded-full text-lg' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* notification row */}
                                        <div className='bg-slate-200 grid grid-cols-12 p-1 '>

                                            {/* prefix */}
                                            <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                                Image
                                            </div>

                                            {/* middle part */}
                                            <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                                <div className=''>
                                                    <span className='text-gray-800'>Notification title</span>
                                                    <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                                </div>

                                            </div>

                                            {/* end option part */}
                                            <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                                <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                    <SlOptions className='= rounded-full text-lg' />
                                                </div>
                                            </div>
                                        </div>{/* notification row */}
                                        <div className=' grid grid-cols-12 p-1 '>

                                            {/* prefix */}
                                            <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                                Image
                                            </div>

                                            {/* middle part */}
                                            <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                                <div className=''>
                                                    <span className='text-gray-800'>Notification title</span>
                                                    <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                                </div>

                                            </div>

                                            {/* end option part */}
                                            <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                                <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                    <SlOptions className='= rounded-full text-lg' />
                                                </div>
                                            </div>
                                        </div>{/* notification row */}
                                        <div className=' grid grid-cols-12 p-1 '>

                                            {/* prefix */}
                                            <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                                Image
                                            </div>

                                            {/* middle part */}
                                            <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                                <div className=''>
                                                    <span className='text-gray-800'>Notification title</span>
                                                    <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                                </div>

                                            </div>

                                            {/* end option part */}
                                            <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                                <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                    <SlOptions className='= rounded-full text-lg' />
                                                </div>
                                            </div>
                                        </div>{/* notification row */}
                                        <div className=' grid grid-cols-12 p-1 '>

                                            {/* prefix */}
                                            <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                                Image
                                            </div>

                                            {/* middle part */}
                                            <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                                <div className=''>
                                                    <span className='text-gray-800'>Notification title</span>
                                                    <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                                </div>

                                            </div>

                                            {/* end option part */}
                                            <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                                <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                    <SlOptions className='= rounded-full text-lg' />
                                                </div>
                                            </div>
                                        </div>{/* notification row */}
                                        <div className=' grid grid-cols-12 p-1 '>

                                            {/* prefix */}
                                            <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                                Image
                                            </div>

                                            {/* middle part */}
                                            <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                                <div className=''>
                                                    <span className='text-gray-800'>Notification title</span>
                                                    <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                                </div>

                                            </div>

                                            {/* end option part */}
                                            <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                                <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                    <SlOptions className='= rounded-full text-lg' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button> View All Notification</button>
                                </maindiv>


                            </div>
                            : <></>
                    }






                </main>




                <footer className='bg-green-400 h-16'>
                    Footer
                </footer>


            </div>

        </div>
    )
}

export default Home