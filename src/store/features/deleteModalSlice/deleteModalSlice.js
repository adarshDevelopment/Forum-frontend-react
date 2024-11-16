import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deleteComment: {
        showDeleteModal: false,
        commentId: null
    }
}

const deleteModalSlice = createSlice({
    name: 'deleteModalSlice',
    initialState: initialState,

    reducers: {
        toggleDeleteModal: (state, action) => {
            if (action.payload) {
                state.deleteComment.showDeleteModal = action.payload;
                return;
            }
            state.deleteComment.showDeleteModal = !state.deleteComment.showDeleteModal;
        },

        setDeleteId: (state, action) => {
            if (!action.payload) {
                state.deleteComment.commentId = null;
                return;
            }
            state.deleteComment.commentId = action.payload;
        }
    }

})

export default deleteModalSlice.reducer;

export const { toggleDeleteModal, setDeleteId } = deleteModalSlice.actions;