import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginModal } from '../../../store/features/modalSlice/toggleSlice';

import { clearLogin, login } from '../../../store/features/authSlice/authSlice';
import { FaGoogle, FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import { fetchUser } from '../../../store/features/authSlice/authSlice';
function Login({ className }) {

    const dispatch = useDispatch();

    // text input UI part
    const [emailToggle, setEmailToggle] = useState(false);
    const [psaswordToggle, setPasswordToggle] = useState(false);


    // send post data through API

    const [formData, setFormData] = useState({
        email: '',
        password: ''

    })

    const clearFormData = () => {
        setFormData({
            email: '',
            password: ''
        })
    }

    const loginDetails = useSelector(state => state.auth.login);
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(login(formData)).unwrap();
            clearFormData();
            dispatch(clearLogin());
            dispatch(toggleLoginModal(false));
        } catch (error) {
            // console.log('Login failed. ', error);
        }

    }

    const errors = useSelector(state => state.auth.login.errors);
    // end of fetch data through API


    // ####################### toggle UI part #######################
    const showLogin = useSelector(state => state.toggleSlice.showLogin)

    const loginModalRef = useRef();
    const loginElement = document.getElementById('loginButton');

    const handleClickOutside = (e) => {
        if (
            showLogin
            && loginElement && !loginElement.contains(e.target)
            && loginModalRef.current && !loginModalRef.current.contains(e.target)
        ) {
            clearFormData();
            dispatch(toggleLoginModal(false));
            dispatch(clearLogin());
        }

    }


    useEffect(() => {
        if (showLogin) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [showLogin])

    const user = useSelector(state => state.auth.user);
    if (user?.user) {
        return <></>
    }
    // ####################### end of toggle UI part   #######################
    if (showLogin) {
        return (
            <div className={`bg-gray-400 bg-opacity-50 h-screen w-screen z-50 top-0 fixed flex justify-center items-center ${className}`}>

                {/* Actual modal box */}
                <div
                    ref={loginModalRef}
                    className=' max-h-[600px] h-[600px] flex flex-col justify-center rounded-xl shadow-2xl w-[550px] bg-white'>

                    {/* Cross */}

                    <div className='bg-green-40 py-4 px-4 flex items-center justify-end'>
                        <span
                            onClick={() => dispatch(toggleLoginModal(false))}
                            className='text-xl p-2 rounded-full bg-gray-200 hover:bg-custom-gray-dark cursor-pointer'>
                            <RxCross1 />
                        </span>

                    </div>

                    {/* main part */}
                    <div className='bg-red-40 overflow-auto flex-grow md:px-20 px-14 flex flex-col gap-3'>
                        <div className='text-2xl font-bold select-none'>Log In</div>

                        <div className='text-sm text-gray-600'>
                            By continuing, you agree to our User Agreement and acknowledge that you understnad the privace policy.
                        </div>

                        <div className=' border p-2 rounded-2xl border-gray-400 relative flex justify-center items-center'>
                            <div className='absolute left-2'><FaGoogle /></div>
                            <span> Continue with Google</span>
                        </div>

                        {/* <div className=' border p-2 rounded-2xl border-gray-400 relative flex justify-center items-center'>
                            <div className='absolute left-2 text-lg'><FaApple /></div>
                            <span> Continue with Apple</span>
                        </div> */}

                        <div className='flex items-center gap-5'>
                            <div className='h-[1px] w-full bg-gray-300' />
                            <span className='text-gray-500'>OR</span>
                            <div className='h-[1px] w-full bg-gray-300' />

                        </div>
                        <form onSubmit={handleSubmitForm} id='loginForm'>
                            <div className='flex flex-col gap-3'>
                                <div className=' rounded-2xl relative flex justify-between items-center'>
                                    <span className={`absolute pointer-events-none left-3 text-md text-gray-500 transition-all duration-100  ${(emailToggle || formData.email) ? 'text-xs top-2' : ''}`}>
                                        {
                                            errors
                                                ? <span className='text-red-600'> {errors}</span>
                                                : (<>Email or username <span className='text-red-600'>*</span></>)
                                        }

                                    </span>
                                    <input
                                        className='bg-custom-gray w-full rounded-2xl px-3 pt-6 pb-2 focus:outline-none focus:border-blue-400 border'
                                        onFocus={() => { setEmailToggle(true) }}
                                        onBlur={() => { setEmailToggle(false) }}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value })
                                        }}
                                        value={formData.email}
                                    />
                                </div>

                                <div className='relative flex items-center'>
                                    <span className={`absolute left-3 text-gray-500 transition-all duration-100 pointer-events-none ${psaswordToggle || formData.password ? 'text-xs top-2' : ''}`}>Enter password <span className='text-red-600'>*</span></span>
                                    <input
                                        onFocus={() => { setPasswordToggle(true) }}
                                        onBlur={() => setPasswordToggle(false)}
                                        className='bg-custom-gray w-full rounded-2xl px-3 pt-6 pb-2 focus:outline-none focus:border-blue-400 border'
                                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                        </form>


                        <div className='text-blue-500 text-sm pt-3'>
                            Forgot Password?

                        </div>

                        <div className='text-sm'>
                            New to Reddit? <span className='text-blue-500'> Sign Up</span>
                        </div>

                    </div>

                    <div className='md:py-6 md:px-20 py-6 px-14 flex items-center flex-grow-0'>
                        <button
                            disabled={loginDetails.loading}
                            form='loginForm'
                            className={`bg-indigo-600 w-full hover:bg-indigo-700 rounded-2xl px-3 py-3 text-white font-semibold ${loginDetails.loading ? 'bg-indigo-700' : ''}`}>
                            Log in
                        </button>
                    </div>
                </div>


            </div >

        )
    }

}

export default Login


// md:py-10 md:px-20 py-10 px-14