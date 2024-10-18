import React, { useState, useRef, useEffect } from 'react'

import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPlus, FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";






function Header({ setToggleProfile, setToggleNotification, profileButtonRef, notificationButtonRef, profileDropDownRef, notificationDropDownRef }) {



    // header functions

    // const [toggleProfile, setToggleProfile] = useState(false);
    // const [toggleNotification, setToggleNotification] = useState(false);

    // const profileButtonRef = useRef(null)       // returns object: {current: null}
    // const profileDropDownRef = useRef(null);

    // const notificationButtonRef = useRef(null);
    // const notificationDropDownRef = useRef(null);


    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        // console.log('darkMode: ', darkMode)
    }

    useEffect(() => {

        document.addEventListener('mousedown', (e) => {
            // console.log()
            // console.log(e.target);

            // if mouse click is registered from everywhere but profile button and its dropdown
            if ((profileButtonRef.current && !profileButtonRef.current.contains(e.target)) &&   // if profile button exists and is not clicked
                (profileDropDownRef.current && !profileDropDownRef.current.contains(e.target))   // if profile button dropdown is not clicked

            ) {
                setToggleProfile(false)
                // setToggleNotification(false);
            }
            // (notificationButtonRef.current && !notificationButtonRef.current.contains(e.target))    // if notification button is not clicked

            if (notificationButtonRef.current && !notificationButtonRef.current.contains(e.target) &&   // if notification button is not clicked
                (notificationDropDownRef.current && !notificationDropDownRef.current.contains(e.target))    // if the drop down is not clicked, close the dropdown
            ) {
                setToggleNotification(false);
            }
            return removeEventListener('mousedown', (e));

        }
        );
    }, []);

    // end of header functions
    return (
        <header className='flex-grow-0 flex shrink-0 overflow-hidden h-16 top-0 w-full left-0 border-b bg-white  z-10 fixed justify-between'>

            <nav className='h-full flex justify-between border-gray-300  w-full px-4'>

                {/* left part */}
                <div className="flex items-center w-full h-full ">

                    <div className="flex-1 ">
                        BlogThread
                    </div>

                    {/* Center search bar */}
                    <div className="flex-1  relative flex items-center">
                        <input type="text" className="border w-[100%] bg-custom-gray rounded-full p-1 pl-12 pr-3 border-gray-400 focus:outline-none focus:bg-white focus:border-blue-500" placeholder='Search' />
                        <span className='absolute left-5 pointer-events-none'> <CiSearch className='text-lg' /></span>
                    </div>


                    {/* right profile and messages */}

                    <div className="flex-1 bg-blue-40 h-full flex items-center justify-end relative">
                        <div className="flex items-center justify-end gap-2">
                            <span className='cursor-pointer hover:bg-slate-400 delay-75 rounded-full p-2'>
                                <RiAdvertisementLine className="text-2xl" />
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
    )
}

export default Header