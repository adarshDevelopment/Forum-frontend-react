import React from 'react'
import { SlOptions } from "react-icons/sl";

function NotificationDropDown({ notificationDropDownRef, toggleNotification }) {
    return (
        <>

            {/* Notification drop down */}
            {
                toggleNotification ?
                    <div ref={notificationDropDownRef} className='flex flex-col w-96 rounded-lg py-2 bg-white text-gray-800 shadow-lg fixed right-4 select-none max-h-[472px] z-50 '>


                        <div className='flex flex-col gap-4 bg-gree-400 mx-2 max-h-[420px] overflow-y-auto border-b '>

                            {/* notification row */}
                            <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

                                {/* prefix */}
                                <div className='col-span-2 bg-pink-40 py-2 flex justify-center'>
                                    Image
                                </div>

                                {/* middle part */}
                                <div className='col-span-9 bg-green-40 px-2 flex flex-col justify-center py-2'>
                                    <div className=''>
                                        <span className='text-gray-800'>Notification title</span>
                                        <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                    </div>

                                </div>

                                {/* end option part */}
                                <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                    <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                        <SlOptions className='= rounded-full text-lg' />
                                    </div>
                                </div>
                            </div>

                            {/* notification row */}
                            <div className='bg-slate-100 grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray '>

                                {/* prefix */}
                                <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                    Image
                                </div>

                                {/* middle part */}
                                <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                    <div className=''>
                                        <span className='text-gray-800'>Notification title</span>
                                        <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                    </div>

                                </div>

                                {/* end option part */}
                                <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                    <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                        <SlOptions className='= rounded-full text-lg' />
                                    </div>
                                </div>
                            </div>

                            {/* notification row */}
                            <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

                                {/* prefix */}
                                <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                    Image
                                </div>

                                {/* middle part */}
                                <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                    <div className=''>
                                        <span className='text-gray-800'>Notification title</span>
                                        <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                    </div>

                                </div>

                                {/* end option part */}
                                <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                    <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                        <SlOptions className='= rounded-full text-lg' />
                                    </div>
                                </div>
                            </div>

                            {/* notification row */}
                            <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

                                {/* prefix */}
                                <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                    Image
                                </div>

                                {/* middle part */}
                                <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                    <div className=''>
                                        <span className='text-gray-800'>Notification title</span>
                                        <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                    </div>

                                </div>

                                {/* end option part */}
                                <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                    <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                        <SlOptions className='= rounded-full text-lg' />
                                    </div>
                                </div>
                            </div>

                            {/* notification row */}
                            <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

                                {/* prefix */}
                                <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                    Image
                                </div>

                                {/* middle part */}
                                <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                    <div className=''>
                                        <span className='text-gray-800'>Notification title</span>
                                        <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                    </div>

                                </div>

                                {/* end option part */}
                                <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                    <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                        <SlOptions className='= rounded-full text-lg' />
                                    </div>
                                </div>
                            </div>

                            {/* notification row */}
                            <div className='grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray'>

                                {/* prefix */}
                                <div className='col-span-2 bg-pink-40 overflow-y-auto py-2 flex justify-center'>
                                    Image
                                </div>

                                {/* middle part */}
                                <div className='col-span-9 bg-green-40 px-1 flex flex-col justify-center py-2'>
                                    <div className=''>
                                        <span className='text-gray-800'>Notification title</span>
                                        <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                    </div>

                                    <div className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum ...
                                    </div>

                                </div>

                                {/* end option part */}
                                <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                    <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                        <SlOptions className='= rounded-full text-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' flex justify-between py-2'>
                            <button className=' items-center mx-auto  bg-custom-gray w-[80%] rounded-3xl py-2 font-semibold text-gray-700 hover:bg-gray-200 hover:underline' > See All</button>

                        </div>


                        {/* <div className='bg-blue-500 w-full flex justify-center '>
                                    <button className='h-full flex justify-center items-center'> See All</button>
                                </div> */}




                    </div>
                    : <></>
            }
        </>
    )
}

export default NotificationDropDown