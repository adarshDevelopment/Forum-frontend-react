import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showRegister: false,
    showLogin: false,
    showNotificationDropdown: false,
    showProfileDropdown: false
}

const toggeleSlice = createSlice({
    name: 'modalSlice',
    initialState: initialState,
    reducers: {

        toggleRegisterModal: (state, action) => {

            // if explicitly false, close the modal immediately
            if (action.payload == false) {
                state.showRegister = false;
                return;
            }
            state.showRegister = !state.showRegister;
        },

        toglgeSignupModal: (state, action) => {
            if (action.payload == false) {
                state.showLogin = false;
                return;
            }
            state.showLogin = !state.showLogin;
        },

        // notification
        toggleNotificationDropdown: (state, action) => {
            if (action.payload == false) {
                state.showNotificationDropdown = false;
                return;
            }
            state.showNotificationDropdown = !state.showNotificationDropdown;

            console.log('notification status; ', state.showNotificationDropdown);
        },

        toggleProfileDropdown: (state, action) => {
            if (action.payload == false) {
                state.showProfileDropdown = false;
                return;
            }
            state.showProfileDropdown = !state.showProfileDropdown;
        }

    }
})

export const { toggleRegisterModal, toggleLoginModal, toggleNotificationDropdown, toggleProfileDropdown } = toggeleSlice.actions;
export default toggeleSlice.reducer;