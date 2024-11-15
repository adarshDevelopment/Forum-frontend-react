import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/authSlice/authSlice';
import toggleSlice from './features/modalSlice/toggleSlice';
import successSlice from './features/successSlice/successSlice';


const store = configureStore({
    reducer: {
        auth: authSlice,
        toggleSlice: toggleSlice,
        successSlice: successSlice
    }
})

export default store;