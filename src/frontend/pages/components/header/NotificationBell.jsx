import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetNotificationCount, fetchNotifications, updateNotification } from '../../../../store/features/notificationSlice/notificationSlice';
import { toggleNotificationDropdown } from '../../../../store/features/modalSlice/toggleSlice';
import { FaRegBell } from "react-icons/fa6";
import echo from '../../../../echo';

function NotificationBell() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);

    // intial notification and unseen notification initial values 
    const notificationData = useSelector(state => state.notificationSlice.notification);

    // fetch initial notifications 
    useEffect(() => {
        dispatch(fetchNotifications(user.user?.id));
    }, [user]);

    // reset notification is_seen values 
    const clickOnNotificationBell = async () => {
        dispatch(toggleNotificationDropdown());
        if (!user) {
            return;
        }
        dispatch(resetNotificationCount(user.user.id));
    }

    // REVERB LARAVEL ECHO web socket
    useEffect(() => {
        if (!token || !user) {
            return;
        }
        const channel = echo.private(`update-notification.${user.user?.id}`)
            .listen('UpdateNotification', (event) => {
                console.log('event: ', event);
                dispatch(updateNotification(event));
            })

        return () => {
            channel.stopListening('UpdateNotification');
        }
    }, [user.user, token])


    return (
        <button
            id="notificationButton"
            onClick={clickOnNotificationBell}

            className='cursor-pointer hover:bg-slate-400 delay-75 p-2 rounded-full relative'>
            {
                notificationData.unseenNotifications > 0
                    ?
                    notificationData.unseenNotifications > 9
                        ? <span className="absolute top-0 right-0 font-semibold h-[20px] w-[20px] bg-red-500 text-white rounded-full flex justify-center items-center">
                            <span className="text-xs">9+</span>
                        </span>
                        : <span className="absolute top-0 right-0 font-semibold h-[18px] w-[18px] bg-red-500 text-white rounded-full flex justify-center items-center">
                            <span className="text-xs">{notificationData.unseenNotifications}</span>
                        </span>
                    : <></>
            }
            <FaRegBell className='text-2xl' />
        </button>

    )
}

export default NotificationBell