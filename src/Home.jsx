import React from 'react'



import { useEffect, useRef, useState } from 'react';



// pages import
import Header from './frontend/pages/Header';
import ProfileDropDown from './frontend/pages/dropdowns/ProfileDropDown';
import NotificationDropDown from './frontend/pages/dropdowns/NotificationDropDown';
import Aside from './frontend/pages/Aside';
import IndexPosts from './frontend/pages/IndexPosts';
import Footer from './frontend/pages/Footer';





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
        <div className=' relative'>

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
                <Aside />


                {/* center main grid */}
                <main className='bg-green-40 col-span-8 flex flex-col relative'>
                    <IndexPosts />

                    {/* footer */}
                    <Footer className={'bg-white'} />
                </main>


                {/* right side */}

                {/* <div className='col-span-2 bg-pink-400 sticky top-16 h-[calc(100vh-64px)] '>
                    second div
                </div> */}



            </div>

        </div>
    )
}

export default Home