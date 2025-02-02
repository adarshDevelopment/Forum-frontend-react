import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleProfileDropdown } from '../../../../store/features/modalSlice/toggleSlice';
import DarkMode from './DarkMode';
import { fetchUser, logout } from '../../../../store/features/authSlice/authSlice';
import { Link } from 'react-router-dom';

function ProfileDropDown() {

    const dispatch = useDispatch();
    const profileValue = useSelector(state => state.toggleSlice);

    const profileElement = document.getElementById('profileButton');

    const profileRef = useRef();

    const handleClickOutside = (e) => {
        if (profileElement
            && profileRef
            && profileRef.current && !profileRef.current.contains(e.target)
            && profileElement && !profileElement.contains(e.target)
        ) {
            dispatch(toggleProfileDropdown(false));
        }
    }

    useEffect(() => {

        if (profileValue) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [profileValue])


    const darkMode = useSelector(state => {
        state.toggleSlice.showDarkMode
    })


    const user = useSelector(state => state.auth.user.user);

    if (profileValue.showProfileDropdown) { // if profileToggle value is set to true, only then display the dropdown

        if (!user) {
            return <></>
        }
        return (
            <div
                ref={profileRef}
                className='flex flex-col w-72 rounded-lg py-2 bg-white text-gray-900 shadow-lg  right-4 select-none z-20 fixed'
            >


                <Link
                    to={`/user/${user?.id}`}
                    className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer border-b border-gray-400 flex flex-col '>
                    <span>View Profile</span>
                    <span className='text-sm text-gray-600 '>{user?.name}</span>
                </Link>

                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Edit Avatar</span>


                {/* dark mode button */}
                <DarkMode />


                <span
                    onClick={() => {
                        dispatch(logout());
                        dispatch(toggleProfileDropdown(false));
                        dispatch(fetchUser());
                    }}
                    className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>
                    Log Out
                </span>
                <hr />
                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Settings</span>

            </div>
        )

    }


}

export default ProfileDropDown