import React, { useState } from 'react'

function Switch() {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-indigo-400 flex justify-center items-center h-screen'>

            <div className={`flex w-20 h-10  rounded-full cursor-pointer
            transition-all duration-500
            ${toggle ? ' bg-blue-600' : ' bg-gray-600'}`}
                onClick={() => setToggle(prevState => !prevState)}
            >

                <span className={`h-10 w-10 bg-white rounded-full transition-all duration-150 
                    ${toggle ? 'ml-10 ' : 'ml-0'}`} />
            </div>
        </div>
    )
}

export default Switch