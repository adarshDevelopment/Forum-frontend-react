import { useDispatch, useSelector } from 'react-redux'
import { toggleRegisterModal, toggleLoginModal } from '../../../../store/features/modalSlice/toggleSlice';


function LoginButtons() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    console.log('user status in loginButton: ', user);
    if (!user.user) {
        return (
            <div className='flex-1 bg-blue-40 h-full flex items-center justify-end relative flex-shrin-0' >

                <span
                    id='loginButton'
                    onClick={() => dispatch(toggleLoginModal())}
                    className='cursor-pointer hover:bg-slate-400 delay-75 rounded-full p-2'>
                    Log In
                </span>

                <span
                    id="registerButton"
                    onClick={() => dispatch(toggleRegisterModal())}
                    className='cursor-pointer hover:bg-slate-400 delay-75 p-2 rounded-full'>
                    Register
                </span>

            </div>
        )
    }

}

export default LoginButtons