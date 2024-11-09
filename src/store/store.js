import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/authSlice/authSlice';
import toggleSlice from './features/modalSlice/toggleSlice';


const store = configureStore({
    reducer: {
        auth: authSlice,
        toggleSlice: toggleSlice
    }
})

export default store;