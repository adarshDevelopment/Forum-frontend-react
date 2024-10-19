import React, { useEffect, useState } from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";

function Login({ className }) {

    const [emailToggle, setEmailToggle] = useState(false);
    const [psaswordToggle, setPasswordToggle] = useState(false);



    const [formData, setFormData] = useState({
        email: '',
        password: ''

    })

    return (
        <div className={`bg-gray-400 bg-opacity-50 h-screen w-screen z-50 top-0 fixed flex justify-center items-center ${className}`}>

            {/* Actual modal box */}
            <div className=' bg-white  flex flex-col justify-center md:py-10 md:px-20 py-10 px-14 rounded-xl shadow-2xl w-[550px] gap-2 '>

                <div className='text-2xl font-bold'>Log In</div>

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

                <div className='flex flex-col gap-3'>
                    <div className='bg-red-400 rounded-2xl relative flex justify-between items-center'>
                        <span className={`absolute pointer-events-none left-3 text-md text-gray-500 transition-all duration-100  ${(emailToggle || formData.email) ? 'text-xs top-2' : ''}`}>
                            Email or username <span className='text-red-600'>*</span>
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
            </div>


        </div>

    )
}

export default Login