import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {
        user: null,
        loading: false,
        isError: false,
        message: '',
        isSuccess: false,
        started: false
    },

    token: localStorage.getItem('token'),

    registration: {
        isError: false,
        loading: false,
        message: '',
        errors: null,
        isSuccess: false,
    },

    login: {
        isError: false,
        loading: false,
        message: '',
        errors: null,
        isSuccess: false
    }
}

const setToken = (token) => {
    localStorage.setItem('token', token);
}

const removeToken = () => {
    localStorage.removeItem('token');
}



// if no token detected, delete the user from the userState

const authSlice = createSlice({
    name: 'createSlice',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            removeToken();
            state.user.user = null;
            state.token = null;
            state.login = initialState.login;
            state.registration = initialState.registration;

        },
        clearLogin: (state) => {
            state.login = initialState.login;
        },
        clearRegister: state => {
            state.registration = initialState.registration;
        }

    },

    extraReducers: builder => {
        // login
        builder
            .addCase(login.pending, (state, action) => {        // pending login
                state.login.loading = true;
                // console.log('message in login pending: ', state.login.message);
            })
            .addCase(                                   // fulfilled login
                login.fulfilled, (state, action) => {
                    const token = action.payload.token;
                    setToken(token);
                    state.token = token;
                    state.login.isError = false;
                    state.login.message = action.payload.message;
                    state.login.errors = action.payload.message;
                    state.login.loading = false;
                    state.isSuccess = true;
                }
            )
            .addCase(           // rejected login
                login.rejected, (state, action) => {    // rejected login
                    removeToken();
                    state.login.isError = true;
                    state.login.message = action.payload.message;
                    state.login.errors = action.payload.message;
                    state.login.loading = false;
                }
            );

        // fetchUser
        builder
            .addCase(fetchUser.pending, (state, action) => {    // pending  user
                state.user.loading = true;
                state.user.started = true;

            })
            .addCase(fetchUser.fulfilled, (state, action) => {      // fulfilled fetchUser

                const payload = action.payload;
                const userState = state.user;

                userState.user = payload.user;
                state.user.isSuccess = true;

                userState.isError = false;
                userState.message = payload.message;
                userState.loading = false;


            })
            .addCase(fetchUser.rejected, (state, action) => {       // rejected fetchUser
                // console.log('inside rejected fetchUser. action: ', action);
                const userState = state.user;
                const payload = action.payload;
                userState.message = payload.message;

                userState.user = null;

                // state.message = action.payload.message;

                state.user.isSuccess = false;
                state.user.loading = false;
            });

        // register
        builder
            .addCase(register.pending, (state, action) => {     // pending registration
                state.registration.loading = true;
                state.registration.isError = true;
                state.registration.errors = {};
                state.isSuccess = false;
            })
            .addCase(register.fulfilled, (state, action) => {   // fulfilled registration
                // add to the global user variable 
                const register = state.registration;
                const payload = action.payload;

                setToken(payload.token);
                state.token = payload.token;
                register.errors = {};
                register.loading = false;
                register.isError = false;
                register.isSuccess = true;
            })
            .addCase(register.rejected, (state, action) => {    //rejected registration
                const register = state.registration;
                const payload = action.payload

                removeToken();
                register.isError = true;
                register.errors = payload?.errors
                register.loading = false;

            })

    }

})


export const register = createAsyncThunk(
    'register/getRegister',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
            return response.data;
        } catch (error) {
            // console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
)


// fetch user
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return rejectWithValue({ message: 'Token not found' });
            }
            const response = await axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (e) {
            if (e.response) {
                return rejectWithValue(e.response.data);
            } else if (e.reqeust) {
                return rejectWithValue({ message: 'No response from the server' });
            } else {
                return rejectWithValue({ message: 'Unknown error' });
            }
        }
    }
)


// verify credentials and set token if correct
export const login = createAsyncThunk(
    'login/getLogin',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'Error loggin in user' })

        }

    }
)





export const { logout, clearLogin, clearRegister } = authSlice.actions;
export default authSlice.reducer;