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
import DeleteCommentModal from './pages/components/modals/DeleteCommentModal';




import { Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePost from './pages/posts/CreatePost';



function Home() {

    const user = useSelector(state => state.auth.user);

    // token and fetchUser

    // const token = localStorage.getItem('token');
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [token])

    // console.log('user in layout: ', user)

    // console.log('user from layout: ', user);
    if (user.loading) {
        return <></>
    } else {
        return (

            <div className=' relative'>


                <Login />
                <SignUp />

                <DeleteCommentModal />
                <Header />


                {/* main content div */}
                <div className='grid grid-cols-12 mt-16 relative'>


                    {/* Drop down menus */}
                    <ProfileDropDown />

                    <NotificationDropDown />

                    {/* end of drop down menus */}



                    {/* ######################################################################################################################################################################## */}

                    {/* Left grid */}
                    <>
                        <Sidebar />
                    </>




                    {/* center main grid */}


                    {/* <Outlet /> */}
                    <Outlet />
                    {/* footer */}



                    {/* right side */}



                    {/* ######################################################################################################################################################################## */}


                </div>
                <Toaster position="top-right" richColors />
                {/* <><Toaster richColors={true} position="top-right" /></> */}
            </div>


        )
    }

}

export default Home