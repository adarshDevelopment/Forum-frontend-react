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
import { IoHomeOutline } from "react-icons/io5";
import { IoMdGlobe } from "react-icons/io";
import { MdOutlineTravelExplore, MdOutlineAddchart } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HiPlus } from "react-icons/hi2";







function Home() {

    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleNotification, setToggleNotification] = useState(false);

    const profileButtonRef = useRef(null)       // returns object: {current: null}
    const profileDropDownRef = useRef(null);

    const notificationButtonRef = useRef(null);
    const notificationDropDownRef = useRef(null);

    //accordion states
    const [customFeedsAccordion, setCustomFeedsAccordion] = useState(false);
    const [recentAccordion, setRecentAccrecentAccordion] = useState(false);
    const [communitiesAccordion, setRecentAcccommunitiesAccordion] = useState(false);

    const loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde neque ratione, alias ipsum beatae blanditiis atque dolor impedit quisquam, sint officiis facilis sunt recusandae earum eos vero, praesentium minus.'
    const loremArray = new Array(100).fill(loremText);
    useEffect(() => {

        document.addEventListener('mousedown', (e) => {

            // console.log(e.target);

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


    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        // console.log('darkMode: ', darkMode)
    }

    return (
        <div>

            <div className='min-h-screen  grid grid-rows-[auto,1fr,auto] '>


                {/* header */}
                <header className='h-16 relative'>
                    <nav className='h-full   border-b border-gray-300 px-4'>
                        <div className="flex items-center justify-between w-full h-full ">

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

                                    <span className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center gap-2 rounded-full py-2 px-3 justify-between font-semibold '><FaPlus />
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


                {/* Main class */}
                <main className='bg-orange-40 relative grid-flow-row  grid grid-cols-12 bg-pink-400'>

                    {/* Drop down menus */}
                    {/* Profile drop down */}
                    {
                        toggleProfile ?
                            <div ref={profileDropDownRef} className='flex flex-col w-72 rounded-lg py-2 bg-white text-gray-800 shadow-lg absolute right-4 select-none'>
                                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer border-b border-gray-500 '>View Profile</span>
                                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Edit Avatar</span>

                                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white  flex justify-between items-center'
                                    onClick={toggleDarkMode}
                                >
                                    <span>Dark Mode</span>
                                    <div className={`w-16 h-8 bg-gray-400 rounded-full cursor-pointer flex items-center
                                        ${darkMode ? 'bg-green-600' : ''}
                                        `}>
                                        <div className={`w-8 h-8 bg-white border rounded-full shadow-2xl transition-all duration-150
                                            ${darkMode ? 'ml-8' : 'ml-0'}
                                            `} />
                                    </div>
                                </span>


                                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Log Out</span>
                                <hr />
                                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Settings</span>

                            </div>
                            : <></>
                    }
                    {/* Notification drop down */}
                    {
                        toggleNotification ?
                            <div ref={notificationDropDownRef} className='flex flex-col w-96 rounded-lg py-2 bg-white text-gray-800 shadow-lg absolute right-4 select-none max-h-[472px]  '>


                                <div className='flex flex-col gap-4 bg-gree-400 mx-2 max-h-[420px] overflow-y-auto border-b '>

                                    {/* notification row */}
                                    <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

                                        {/* prefix */}
                                        <div className='col-span-2 bg-pink-40 py-2 flex justify-center'>
                                            Image
                                        </div>

                                        {/* middle part */}
                                        <div className='col-span-9 bg-green-40 px-2 flex flex-col justify-center py-2'>
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
                                    <div className='bg-slate-100 grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray '>

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
                                    <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

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
                                    <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

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
                                    <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

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
                                    <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

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

                                <div className=' flex justify-between py-2'>
                                    <button className=' items-center mx-auto  bg-custom-gray w-[80%] rounded-3xl py-2 font-semibold text-gray-700 hover:bg-gray-200 hover:underline' > See All</button>

                                </div>


                                {/* <div className='bg-blue-500 w-full flex justify-center '>
                                    <button className='h-full flex justify-center items-center'> See All</button>
                                </div> */}




                            </div>
                            : <></>
                    }


                    {/* Left side */}

                    <aside className=" bg-purple-400 col-span-2 overflow-y-auto max-h-[calc(screen-128px)] sticky">

                        {/* scrollable sidebar */}
                        <div className=' h-full flex flex-col px-5 bg-green-400'>

                            {/* home, popular, explore, all */}
                            <div className='flex flex-col justify-center p-3 text-xl border-b'>

                                <div className='flex justify-start items-center gap-2  cursor-pointer hover:bg-gray-200 p-3'>
                                    <span> <IoHomeOutline /></span>
                                    <span>Home</span>
                                </div>

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


                    {/* center part  */}
                    <center className='col-span-7 bg-red-400'>
                        <div className='bg-slate-400 h-full'>
                            {
                                loremArray.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))
                            }

                        </div>
                    </center>


                    {/* right side */}
                    <div className=" col-span-2">

                    </div>





                </main>



                {/* footer class */}
                <footer className='h-16'>
                    Footer
                </footer>


            </div >

        </div >
    )
}

export default Home