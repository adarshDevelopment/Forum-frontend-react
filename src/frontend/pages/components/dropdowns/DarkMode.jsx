import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../../../../store/features/modalSlice/toggleSlice';


function DarkMode() {

    const darkMode = useSelector(state => state.toggleSlice.showDarkMode)
    const dispatch = useDispatch();
    return (
        <span className='px-7 py-4 hover:bg-indigo-500 hover:text-white flex justify-between items-center'
            onClick={() => dispatch(toggleDarkMode())}
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
    )
}

export default DarkMode