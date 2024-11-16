import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deleteComment: {
        showDeleteModal: false,
        commentId: null,
    },

    fetchCommentTrigger: false

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
        },
        setFetchCommentTrigger: state => {
            state.fetchCommentTrigger = !state.fetchCommentTrigger;
            console.log('trigger changed: ', state.fetchCommentTrigger);
        }

    },


})

export default deleteModalSlice.reducer;

export const { toggleDeleteModal, setDeleteId, setFetchCommentTrigger } = deleteModalSlice.actions;