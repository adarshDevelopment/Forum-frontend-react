import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {
        user: null,
        loading: false,
        isError: false,
    },

    token: null,
}

const setToken = (token) => {
    localStorage.setItem('token', null);

    return token = localStorage.getItem('token');
}


const authSlice = createSlice({
    name: 'createSlice',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state, action) => {
                state.user.loading = true;
            })
            .addCase(
                login.fulfilled, (state, action) => {
                    const data = action.payload
                    state.loading = false;
                    state.user = data.user;
                    setToken(data.token);
                    state.token = data.token;
                }
            )
            .addCase(
                login.rejected, (state, action) => {
                    state.loading = false;
                    state.isError = true;
                    state.token = null;
                    setToken(null);
                }
            );

        // fetchUser
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                const data = action.payload;

                state.user = data.user;
                state.loading = false;
                state.isError = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.user.isError = true;
                state.user.loading = false;
                state.token = null;
            });

        builder
            .addCase(register.pending, (state, action) => {
                state.user.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                const user = action.payload;
                state.user = user;
                state.loading = false;
                setToken(user.token);
            })

    }

})


// fetch
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }
        const data = await axios.get('http://127.0.0.1:8000/api/getUser', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;
    }
)

// verify credentials and set token if correct
export const login = createAsyncThunk(
    'login/getLogin',
    async (formData) => {
        const data = await axios.post('http://127.0.0.1:8000/api/login', formData)
        return data.data;
    }
)


export const register = createAsyncThunk(
    'register/getRegister',
    async (formData) => {
        const data = await axios.post('http://127.0.0.1:8000/api/login', formData)
        return data.data;
    }
)

export default authSlice.reducer;