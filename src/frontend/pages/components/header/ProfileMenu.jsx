
import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPlus, FaRegBell } from "react-icons/fa6";

import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { toggleNotificationDropdown, toggleProfileDropdown } from '../../../../store/features/modalSlice/toggleSlice';

function ProfileMenu({ className }) {


    const dispatch = useDispatch();

    return (
        <div className={`${className}`}>
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


                {/* Notification */}
                <span
                    id="notificationButton"
                    onClick={() => { dispatch(toggleNotificationDropdown()) }}

                    className='cursor-pointer hover:bg-slate-400 delay-75 p-2 rounded-full'>
                    <FaRegBell className='text-2xl' />
                </span>

                {/* End of notification */}

                {/* Profile Dropdown */}
                <button
                    id="profileButton"
                    onClick={() => dispatch(toggleProfileDropdown())}
                    className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center h-10 w-10 p-[2px] rounded-full relative select-none'
                >
                    <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" className='object-cover h-full w-full rounded-full' alt="" />

                </button>

                {/* End of profile drpodown */}



            </div>
        </div>
    )
}

export default ProfileMenu