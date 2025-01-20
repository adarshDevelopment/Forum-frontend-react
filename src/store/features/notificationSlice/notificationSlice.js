import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    notification: {
        loading: false,
        isError: false,
        data: null,
        unseenNotifications: 0
    },

    test: {
        loading: false,
        isError: false,
        data: null
    },
    markNotificationAsRead: {
        loading: false,
        isError: false,
        data: null
    }
}

const notificationSlice = createSlice({
    name: 'notificationSlice',
    initialState: initialState,

    reducers: {
        // set the count of notiafication when new web socket receives new update
        updateNotification: (state, action) => {
            state.notification.data.unshift(action.payload.notification);    // adds data to the begining
            state.notification.unseenNotifications++;
        }
    },

    extraReducers: builder => {

        //  fetch notifciations
        builder.addCase(fetchNotifications.pending, (state) => {
            state.notification.loading = true;
        });

        builder.addCase(fetchNotifications.fulfilled, (state, action) => {
            state.notification.data = action.payload.notifications.notifications;
            state.notification.unseenNotifications = action.payload.notifications.unseenNotifications;

            state.notification.isError = false;
            state.notification.loading = false;
        });

        builder.addCase(fetchNotifications.rejected, (state, action) => {
            state.notification.isError = true;
            state.notification.loading = false;
            state.notification.data = null;
        });

        // click on notification
        builder.addCase(markNotificationasRead.pending, (state) => {
            state.notification.loading = true;
        });

        builder.addCase(markNotificationasRead.fulfilled, (state, action) => {
            state.markNotificationAsRead.loading = false;
            state.markNotificationAsRead.isError = false;


            const readNotification = action.payload.notification;
            // update notification array
            const newList = state.notification.data.map(notification => notification.id === readNotification.id ? readNotification : notification);
            // replace the array with updated array
            state.notification.data = newList;
        });

        builder.addCase(markNotificationasRead.rejected, (state, action) => {
            state.markNotificationAsRead.loading = false;
            state.markNotificationAsRead.isError = true;
            console.log('Error: ', action.payload);
        });

        // reset Notification
        builder.addCase(resetNotificationCount.fulfilled, (state, action) => {
            state.notification.unseenNotifications = action.payload.unseenNotifications
        });


    }
})




export const fetchNotifications = createAsyncThunk(
    'notification/fetchNotifications',
    async (userId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return rejectWithValue('Token not found');
            }
            // const response = await axios.get('http://localhost:8000/api/test');
            const response = await axios.get(`http://localhost:8000/api/notification/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            return response.data;
        } catch (e) {
            if (e.response && e.response.data) {
                return rejectWithValue(e.response.data);
            }
            return rejectWithValue({ message: 'No response from the server' });
        }
    }
);

export const markNotificationasRead = createAsyncThunk(
    'notification/markNotificationAsRead',
    async (notificationId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                rejectWithValue('Token not found');
            }
            const response = await axios.post('http://localhost:8000/api/markNotificationAsRead',
                { notificationId: notificationId },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            return response.data;

        } catch (e) {
            if (e.response && e.response.data) {
                return rejectWithValue(e.response.data);
            }
            return rejectWithValue({ message: 'No response from the server' });
        }
    }
)

export const resetNotificationCount = createAsyncThunk(
    'Notification/resetNotificationCount',
    async (userId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                rejectWithValue('Token not found');
            }
            const response = await axios.post('http://localhost:8000/api/resetNotificationCount', {
                userId: userId
            },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            return response.data;
        } catch (e) {
            if (e.respone && e.respone.data) {
                return rejectWithValue(e.respone.data);
            }
            return isRejectedWithValue({ message: 'No reponse from the server' });
        }
    }
)

export const { updateNotification } = notificationSlice.actions;

export default notificationSlice.reducer;       // to import on the store