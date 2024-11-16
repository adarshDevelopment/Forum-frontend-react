import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/authSlice/authSlice';
import toggleSlice from './features/modalSlice/toggleSlice';
import successSlice from './features/successSlice/successSlice';
import deleteModalSlice from './features/deleteModalSlice/deleteModalSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        toggleSlice: toggleSlice,
        successSlice: successSlice,
        deleteModalSlice: deleteModalSlice
    }
})

export default store;