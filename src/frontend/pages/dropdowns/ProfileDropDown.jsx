import React from 'react'

function ProfileDropDown({ toggleProfile, profileDropDownRef, toggleDarkMode, darkMode }) {
    return (
        <>
            {/* Profile drop down */}
            {
                toggleProfile ?
                    <div ref={profileDropDownRef} className='flex flex-col w-72 rounded-lg py-2 bg-white text-gray-800 shadow-lg  right-4 select-none z-20 fixed'>
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
        </>
    )
}

export default ProfileDropDown