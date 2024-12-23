import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import reducer from "../modalSlice/toggleSlice";

const initialState = {
    notification: {}
}

const notificationSlice = createSlice({
    name: notificationSlice,
    initialState: initialState,
    reducers: {

    },
    extraReducers:{
        
    }
})

export const faetchNotifications = createAsyncThunk(
    'notification/fetchNotification',
);

export default notificationSlice.reducer;