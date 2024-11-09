import React, { useEffect, useRef, useState } from 'react'
import { toggleRegisterModal } from '../../store/features/modalSlice/toggleSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { FaGoogle, FaApple } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { register } from '../../store/features/authSlice/authSlice';



function SignUp({ className }) {

    // UI textfield animations
    const [emailToggle, setEmailToggle] = useState(false);
    const [psaswordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);


    // form data section
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''

    })

    const clearFormData = () => {
        setFormData({});
    }

    // this goes to redux from where asyncCreateThunk will handle it
    const handleSubmitForm = (e) => {
        e.preventDefault();
        register(formData);
        // clearFormData();

    }
    const registerModalRef = useRef();

    //  UI toggle signup modal code here
    const modal = useSelector(state => state.toggleSlice)
    const dispatch = useDispatch();


    const handleClickOutside = (e) => {
        if (registerModalRef.current && !registerModalRef.current.contains(e.target)) {
            dispatch(toggleRegisterModal(false));
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }

    // registers event at the start of the run
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    }, []);
    // close modal useRef section



    if (modal.showRegister) {
        return (
            <div
                className={`bg-gray-400 bg-opacity-50 h-screen w-screen z-50 top-0 fixed flex justify-center items-center ${className} overflow-auto`}>

                {/* Actual modal box */}
                <div
                    ref={registerModalRef}
                    className=' bg-white max-h-[664px] h-[664px] flex flex-col justify-center rounded-xl shadow-2xl w-[550px] '>

                    {/* Cross */}

                    <div className='bg-green-40 py-4 px-4 flex items-center justify-end'>
                        <span
                            onClick={() => dispatch(toggleRegisterModal(false))}
                            className='text-xl p-2 rounded-full bg-gray-200 hover:bg-custom-gray-dark cursor-pointer'>
                            <RxCross1 />
                        </span>

                    </div>

                    {/* main part */}
                    <div className='bg-red-40 overflow-auto flex-grow md:px-20 px-14 flex flex-col gap-3'>
                        <div className='text-2xl font-bold select-none'>Register</div>

                        <div className='text-sm text-gray-600'>
                            By continuing, you agree to our User Agreement and acknowledge that you understnad the privace policy.
                        </div>

                        <div className=' border p-2 rounded-2xl border-gray-400 relative flex justify-center items-center'>
                            <div className='absolute left-2'><FaGoogle /></div>
                            <span> Continue with Google</span>
                        </div>

                        <div className=' border p-2 rounded-2xl border-gray-400 relative flex justify-center items-center'>
                            <div className='absolute left-2 text-lg'><FaApple /></div>
                            <span> Continue with Apple</span>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='h-[1px] w-full bg-gray-300' />
                            <span className='text-gray-500'>OR</span>
                            <div className='h-[1px] w-full bg-gray-300' />

                        </div>

                        {/* Form part */}
                        {/* email and password */}

                        <form onSubmit={handleSubmitForm} id='register-form'>
                            <div className='flex flex-col gap-3'>
                                {/* email */}
                                <div className='bg-red-400 rounded-2xl relative flex justify-between items-center'>
                                    <span className={`absolute pointer-events-none left-3 text-md text-gray-500 transition-all duration-100  ${(emailToggle || formData.email) ? 'text-xs top-2' : ''}`}>
                                        Email <span className='text-red-600'>*</span>
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


                                {/* Confirm Password */}
                                <div className='relative flex items-center'>
                                    <span className={`absolute left-3 text-gray-500 transition-all duration-100 pointer-events-none ${psaswordToggle || formData.password ? 'text-xs top-2' : ''}`}>Enter password <span className='text-red-600'>*</span></span>
                                    <input
                                        onFocus={() => { setPasswordToggle(true) }}
                                        onBlur={() => setPasswordToggle(false)}
                                        className='bg-custom-gray w-full rounded-2xl px-3 pt-6 pb-2 focus:outline-none focus:border-blue-400 border'
                                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>


                                {/* Confirm password */}
                                <div className='relative flex items-center'>
                                    <span className={`absolute left-3 text-gray-500 transition-all duration-100 pointer-events-none ${confirmPasswordToggle || formData.confirmPassword ? 'text-xs top-2' : ''}`}>Confirm Password <span className='text-red-600'>*</span></span>
                                    <input
                                        onFocus={() => { setConfirmPasswordToggle(true) }}
                                        onBlur={() => setConfirmPasswordToggle(false)}
                                        className='bg-custom-gray w-full rounded-2xl px-3 pt-6 pb-2 focus:outline-none focus:border-blue-400 border'
                                        onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    />
                                </div>

                            </div>

                        </form>

                        <div className='text-blue-500 text-sm pt-3'>
                            Back to Login

                        </div>

                    </div>

                    <div className='md:py-6 md:px-20 py-6 px-14 flex items-center flex-grow-0'>
                        <button
                            form='register-form' className='bg-indigo-600 w-full hover:bg-indigo-700 rounded-2xl px-3 py-3 text-white font-semibold'>
                            Sign Up
                        </button>
                    </div>
                </div>


            </div>

        )
    }

}

export default SignUp


// md:py-10 md:px-20 py-10 px-14