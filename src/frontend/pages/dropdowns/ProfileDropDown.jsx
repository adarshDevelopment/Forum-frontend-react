import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleProfileDropdown } from '../../../store/features/modalSlice/toggleSlice';

function ProfileDropDown({ toggleDarkMode, darkMode }) {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.toggleSlice);

    const profileRef = useRef();

    const hanldeClickOutside = (e) => {
        if (profileRef.current && !profileRef.current.contains(e.target)) {
            dispatch(toggleProfileDropdown(false));
        }
    }
    //  if mousedown on anywhere but dropdown, close 
    useEffect(() => {
        document.addEventListener('mousedown', hanldeClickOutside);

        // returns a function
        return () => {
            document.removeEventListener('mousedown',)
        }
    }, [])


    if (profile.showProfileDropdown) {
        return (
            <div
                ref={profileRef}
                className='flex flex-col w-72 rounded-lg py-2 bg-white text-gray-800 shadow-lg  right-4 select-none z-20 fixed'>
                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer border-b border-gray-500 '>View Profile</span>
                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Edit Avatar</span>


                {/* dark mode button */}
                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white flex justify-between items-center'
                    onClick={toggleDarkMode}
                >
                    <span>Dark Mode</span>
                    <div className={`w-16 h-8 bg-gray-400 rounded-full cursor-pointer flex items-center
                                            ${darkMode ? 'bg-green-600' : ''}
                                            `}>
                        <div className={`w-8 h-8 bg-white border rounded-full shadow-2xl transition-all duration-150
                                                ${darkMode ? 'ml-8' : 'ml-0'}
                                                `} // if darkmode? half div shifts to exactly half width, 8 to ml-8, and if not ml becomes 0, comes back to its original place
                        />
                    </div>
                </span>


                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Log Out</span>
                <hr />
                <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white cursor-pointer'>Settings</span>

            </div>
        )

    }


}

export default ProfileDropDown