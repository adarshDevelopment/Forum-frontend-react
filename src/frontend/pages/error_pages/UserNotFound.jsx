import React from 'react'
import { useParams } from 'react-router-dom'

function UserNotFound() {
    const { username } = useParams();

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-full flex flex-col items-center justify-center text-gray-600'>
                <div className='text-7xl font-bold'>404</div>
                <div className='text-4xl'>No user found by {username} </div>
            </div>
        </div>
    )
}

export default UserNotFound