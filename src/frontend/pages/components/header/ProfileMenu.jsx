
import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPlus, FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toggleProfileDropdown } from '../../../../store/features/modalSlice/toggleSlice';
import NotificationBell from "./NotificationBell";
import { useDispatch } from "react-redux";


function ProfileMenu({ className, user }) {

    console.log('user avatar: ', user);

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

                <Link
                    to={'/create_post'}
                    className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center gap-2 rounded-full py-2 px-3 justify-between font-semibold '><FaPlus />
                    Create
                </Link>


                {/* Notification */}
                <NotificationBell />

                {/* End of notification */}

                {/* Profile Dropdown */}
                <button
                    id="profileButton"
                    onClick={() => dispatch(toggleProfileDropdown())}
                    className='cursor-pointer hover:bg-slate-400 delay-75 flex items-center h-10 w-10 p-[2px] rounded-md relative select-none'
                >
                    {
                        user.avatar
                            ? <img src={user.avatar} className='object-cover h-full w-full rounded-md' alt="" />
                            : <img src="./images/avatarPlaceholder.webp" className='object-cover h-full w-full rounded-md' alt="" />
                    }

                </button>
                {/* End of profile drpodown */}

            </div>
        </div>
    )
}

export default ProfileMenu