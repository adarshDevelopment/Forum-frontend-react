import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    createPostSuccess: false,
    updatePostSuccess: false,

}

const successSlice = createSlice({
    name: 'successSlice',
    initialState: initialState,
    reducers: {
        setSuccessPost: (state, action) => {
            if (action.payload) {
                state.createPostSuccess = action.payload;
                return;
            }

            state.createPostSuccess = !state.createPostSuccess;
        }
    }
})

export default successSlice.reducer;
export const { setSuccessPost } = successSlice.actions