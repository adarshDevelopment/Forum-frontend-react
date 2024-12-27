import { useDispatch, useSelector } from 'react-redux';
import { SlOptions } from "react-icons/sl";
import React, { useEffect, useRef, useState } from 'react'
import { toggleNotificationDropdown } from '../../../../store/features/modalSlice/toggleSlice';
import useFetch from '../../../hooks/useFetch';
import getGetData from '../../../../helperFunctions/getGetData';
import getPostData from '../../../../helperFunctions/getPostData';


function NotificationDropDown() {


    /*
        any click registerd outside of notification button (fetched through getElementById) and the dropdown itself will close the dropdown
    */
    const dispatch = useDispatch();
    const notificationRef = useRef();

    const notificationValue = useSelector(state => state.toggleSlice.showNotificationDropdown);

    const notificationElement = document.getElementById('notificationButton');

    // any click registerd outside of notificaiton button and dropdown will close the window
    const hanldeClickOutside = (e) => {
        if (notificationRef.current
            && notificationElement
            && notificationValue
            && !notificationRef.current.contains(e.target)
            && !notificationElement.contains(e.target)
        ) {
            dispatch(toggleNotificationDropdown(false));
        }

    }




    useEffect(() => {
        if (notificationValue) {
            document.addEventListener('click', hanldeClickOutside);
        } else {
            document.removeEventListener('click', hanldeClickOutside);
        }
        return () => {
            document.removeEventListener('click', hanldeClickOutside);
        }

    }, [notificationValue])


    // fetch notifications
    const user = useSelector(state => state.auth.user);
    const [notificationList, setNotificationList] = useState([]);

    const fetchNotifications = async () => {
        const data = await getGetData({ url: `notification/${user.user?.id}` });
        setNotificationList(data.data.notifications);
    }


    useEffect(() => {
        if (user.user) {
            fetchNotifications()
        }

    }, [])

    const clickOnNotification = async (id) => {
        // set seen value to true. use await
        const data = await getPostData({ url: 'clickOnNotification', formData: { notificationId: id } });
        const curentNotification = data.data.notification;

        setNotificationList(notificationList.map(item => {
            if (item.id == curentNotification.id) {
                return { ...item, ...curentNotification }
            }
            return item;
        }))



        // navigate to post 

    }

    if (notificationValue) {
        return (
            <>
                <div
                    ref={notificationRef}
                    className='flex flex-col w-96 rounded-lg py-2 bg-white text-gray-800 shadow-lg fixed right-4 select-none max-h-[472px] z-20 '>


                    <div className='flex flex-col gap-2 bg-gree-400 mx-2 h-[320px] overflow-y-auto border-b bg-red-40 '>

                        {
                            notificationList
                                ? notificationList?.map(notification =>
                                    <div
                                        key={notification.id}
                                        onClick={() => clickOnNotification(notification.id)}
                                        className={`grid grid-cols-12 p-1 cursor-pointer hover:bg-custom-gray ${notification.is_seen ? 'bg-white' : 'bg-slate-100'}`}>

                                        {/* prefix */}
                                        <div className='col-span-2 bg-pink-40 py-2 flex justify-center'>
                                            Image
                                        </div>

                                        {/* middle part */}
                                        <div className='col-span-9 bg-green-40 px-2 flex flex-col justify-center py-2'>
                                            <div className=''>
                                                <span className='text-gray-800'>{notification.title}</span>
                                                <span>. <span className='text-sm text-gray-600'> 4d</span></span>
                                            </div>

                                            <div className="text-sm text-gray-600">
                                                {notification.message}
                                            </div>

                                        </div>

                                        {/* end option part */}
                                        <div className='col-span-1 bg-blue-40 flex flex-col items-center justify-start py-2'>
                                            <div className=' p-2 rounded-full cursor-pointer hover:bg-custom-gray'>
                                                <SlOptions className='= rounded-full text-sm text-gray-500' />
                                            </div>
                                        </div>
                                    </div>
                                )
                                : <></>
                        }

                        {/* notification row */}


                    </div>

                    {/* ------------------------------------------------------------------------------------------------ */}
                    <div className=' flex justify-between py-2'>
                        <button className=' items-center mx-auto  bg-custom-gray w-[80%] rounded-3xl py-2 font-semibold text-gray-700 hover:bg-gray-200 hover:underline' > See All</button>

                    </div>


                    {/* <div className='bg-blue-500 w-full flex justify-center '>
                    <button className='h-full flex justify-center items-center'> See All</button>
                </div> */}




                </div>


            </>
        )
    }




}

export default NotificationDropDown