import React from 'react'

import { Toaster, toast } from 'sonner';

import { useRef, useState } from 'react';



// pages import
import Header from './pages/Header';
import ProfileDropDown from './pages/dropdowns/ProfileDropDown';
import NotificationDropDown from './pages/dropdowns/NotificationDropDown';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
import Login from './pages/Login';


import { Outlet } from 'react-router-dom';





function Home() {

    // header functions

    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleNotification, setToggleNotification] = useState(false);

    const profileButtonRef = useRef(null)       // returns object: {current: null}
    const profileDropDownRef = useRef(null);

    const notificationButtonRef = useRef(null);
    const notificationDropDownRef = useRef(null);

    const [darkMode, setDarkMode] = useState(false);



    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
        // console.log('darkMode: ', darkMode)
    }

    // end of header functions

    return (

        <div className='bg-yellow-40 h-screen w-full relative top-0'>
            {/* <Login className={'absolute  top-0 left-0'} /> */}

            <div className='min-h-screen bg-green-40 relative'>


                <Header setToggleNotification={setToggleNotification}
                    setToggleProfile={setToggleProfile}
                    profileButtonRef={profileButtonRef}
                    notificationButtonRef={notificationButtonRef}
                    profileDropDownRef={profileDropDownRef}
                    notificationDropDownRef={notificationDropDownRef}
                />


                {/* main content div */}
                <div className='grid grid-cols-12 mt-16 relative'>


                    {/* Drop down menus */}
                    <ProfileDropDown profileDropDownRef={profileDropDownRef}
                        toggleProfile={toggleProfile}
                        toggleDarkMode={toggleDarkMode}
                        darkMode={darkMode}
                    />

                    <NotificationDropDown toggleNotification={toggleNotification} notificationDropDownRef={notificationDropDownRef} />

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
        </div>
    )
}

export default Home