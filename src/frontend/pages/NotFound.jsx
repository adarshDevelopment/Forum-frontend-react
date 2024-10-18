import React from 'react'

function NotFound() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-full flex flex-col items-center justify-center text-gray-600'>
                <div className='text-7xl font-bold'>404</div>
                <div className='text-4xl'>Page not found</div>
            </div>
        </div>
    )
}

export default NotFound