import React, { useState, useRef, useEffect } from 'react'

import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPlus, FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import { useDispatch } from 'react-redux';

import { toggleNotificationDropdown, toggleRegisterModal, toggleProfileDropdown } from '../../../store/features/modalSlice/toggleSlice';

import ProfileMenu from './ProfileMenu';

function Header() {

    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        // console.log('darkMode: ', darkMode)
    }

    const notificaition = useRef();

    useEffect(() => {


    }, []);

    // end of header functions
    return (
        <header className='flex-grow-0 flex shrink-0 overflow-hidden h-16 top-0 w-full left-0 border-b bg-white  z-10 fixed justify-between'>

            <nav className='h-full flex justify-between items-center border-gray-300 w-full px-4'>

                {/* BlogThread logo  */}
                <div className="flex-shrink-0 flex-grow">
                    BlogThread
                </div>

                {/* Center search bar */}
                <div className="flex-grow relative flex items-center">
                    <input type="text" className="border w-[100%] bg-custom-gray rounded-full p-1 pl-12 pr-3 border-gray-400 focus:outline-none focus:bg-white focus:border-blue-500" placeholder='Search' />
                    <span className='absolute left-5 pointer-events-none'> <CiSearch className='text-lg' /></span>
                </div>


                {/* right profile and messages */}

                <ProfileMenu className={'flex-1 bg-blue-40 h-full flex items-center justify-end relative flex-shrin-0'} />

                
                {/* <div className='h-[1px] bg-black'>
            
        </div> */}

            </nav>
        </header>
    )
}

export default Header