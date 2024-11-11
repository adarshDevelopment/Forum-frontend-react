import React, { useEffect } from 'react'
import { Toaster, toast } from 'sonner';
import { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import { fetchUser } from 'src\store\features\authSlice\authSlice.js'
import { fetchUser } from '../store/features/authSlice/authSlice';


// pages import
import Header from './pages/components/header/Header';
import ProfileDropDown from './pages/components/dropdowns/ProfileDropDown';
import NotificationDropDown from './pages/components/dropdowns/NotificationDropDown';
import Sidebar from './pages/components/Sidebar';
import Footer from './pages/components/Footer';
import Login from './pages/components/Login';
import SignUp from './pages/components/SignUp';




import { Outlet } from 'react-router-dom';



function Home() {

    const user = useSelector(state => state.auth.user);
    // header functions

    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleNotification, setToggleNotification] = useState(false);

    const profileButtonRef = useRef(null)       // returns object: {current: null}
    const profileDropDownRef = useRef(null);

    const notificationButtonRef = useRef(null);
    const notificationDropDownRef = useRef(null);


    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        // console.log('darkMode: ', darkMode)
    }

    // end of header functions

    // token and fetchUser

    const token = localStorage.getItem('token');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [token])

    // console.log('user in layout: ', user)

    // console.log('user from layout: ', user);
    if (user?.loading) {
        return <></>
    } else {
        return (

            <div className=' relative'>


                <Login />
                <SignUp />


                <Header />


                {/* main content div */}
                <div className='grid grid-cols-12 mt-16 relative'>


                    {/* Drop down menus */}
                    <ProfileDropDown />

                    <NotificationDropDown />

                    {/* end of drop down menus */}



                    {/* Left grid */}
                    <Sidebar />


                    {/* center main grid */}
                    <main className='bg-green-40 col-span-8 flex flex-col relative'>

                        <Outlet />

                        {/* footer */}
                        <Footer className={'bg-white'} />
                    </main>


                    {/* right side */}

                    {/* <div className='col-span-2 bg-pink-400 sticky top-16 h-[calc(100vh-64px)] '>
            second div
        </div> */}



                </div>
                <><Toaster richColors={true} position="top-right" /></>
            </div>


        )
    }

}

export default Home