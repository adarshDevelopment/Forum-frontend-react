import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showRegister: false,
    showLogin: false,
    showNotificationDropdown: false,
    showProfileDropdown: false,
    showDarkMode: false
}

const toggeleSlice = createSlice({
    name: 'modalSlice',
    initialState: initialState,
    reducers: {

        toggleRegisterModal: (state, action) => {

            // if explicitly false, close the modal immediately
            if (action.payload) {
                state.showLogin = action.payload;
                return;
            }
            state.showRegister = !state.showRegister;
        },

        toggleLoginModal: (state, action) => {
            if (action.payload) {
                state.showLogin = action.payload;
                return;
            }
            state.showLogin = !state.showLogin;
        },

        // notification
        toggleNotificationDropdown: (state, action) => {
            if (action.payload) {
                state.showNotificationDropdown = action.payload;
                return;
            }
            state.showNotificationDropdown = !state.showNotificationDropdown;

        },

        toggleProfileDropdown: (state, action) => {
            if (action.payload == false) {
                state.showProfileDropdown = false;
                return;
            }
            state.showProfileDropdown = !state.showProfileDropdown;
        },

        toggleDarkMode: state => {
            state.showDarkMode = !state.showDarkMode;
        }
    }
})

export const { toggleRegisterModal, toggleLoginModal, toggleNotificationDropdown, toggleProfileDropdown, toggleDarkMode } = toggeleSlice.actions;
export default toggeleSlice.reducer;