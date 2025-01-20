import React, { useEffect } from 'react'
import { Toaster, toast } from 'sonner';

import { useDispatch, useSelector } from 'react-redux';

// import { fetchUser } from 'src\store\features\authSlice\authSlice.js'
import { fetchUser } from '../store/features/authSlice/authSlice';


// pages import
import Header from './pages/components/header/Header';
import ProfileDropDown from './pages/components/dropdowns/ProfileDropDown';
import NotificationDropDown from './pages/components/dropdowns/NotificationDropDown';
import Sidebar from './pages/components/Sidebar';
import Login from './pages/components/Login';
import SignUp from './pages/components/SignUp';
import DeleteCommentModal from './pages/components/modals/DeleteCommentModal';


import echo from '../echo';

import { Outlet } from 'react-router-dom';
import DeletePostModal from './pages/components/modals/DeletePostModal';



function Home() {

    const dispatch = useDispatch();


    const user = useSelector(state => state.auth.user);

    // token and fetchUser

    // const token = localStorage.getItem('token');
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        dispatch(fetchUser());
    }, [token])


    if (user.loading) {
        return <></>
    } else {
        return (

            <div className=' relative'>

                <Login />
                <SignUp />

                {/* <DeleteCommentModal /> */}
                <DeletePostModal />
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