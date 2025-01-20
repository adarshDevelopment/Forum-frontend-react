import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/authSlice/authSlice';
import toggleSlice from './features/modalSlice/toggleSlice';
import successSlice from './features/successSlice/successSlice';
import deleteModalSlice from './features/deleteModalSlice/deleteModalSlice';
import notificationSlice from './features/notificationSlice/notificationSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        toggleSlice: toggleSlice,
        successSlice: successSlice,
        deleteModalSlice: deleteModalSlice,
        notificationSlice: notificationSlice
    }
})

export default store;