import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deleteComment: {
        showDeleteModal: false,
        commentId: null,
    },

    deletePost: {
        showDeletePostModal: false,
        postId: null
    },

    fetchCommentTrigger: false,
    fetchPostTrigger: false
}

const deleteModalSlice = createSlice({
    name: 'deleteModalSlice',
    initialState: initialState,

    reducers: {
        // display delete modal
        toggleDeleteCommentModal: (state, action) => {
            if (action.payload) {
                state.deleteComment.showDeleteModal = action.payload;
                return;
            }
            state.deleteComment.showDeleteModal = !state.deleteComment.showDeleteModal;
        },

        // set id to be deleted
        setCommentId: (state, action) => {
            if (!action.payload) {
                state.deleteComment.commentId = null;
                return;
            }
            state.deleteComment.commentId = action.payload;
        },
        

        // delete post 
        toggleDeletePostModal: (state, action) => {
            if (action.payload) {
                state.deletePost.showDeletePostModal = action.payload;
                return;
            }
            state.deletePost.showDeletePostModal = !state.deletePost.showDeletePostModal;
        },

        setPostId: (state, action) => {
            state.deletePost.postId = action.payload;
            // console.log('inside setPostId: ', state.deletePost.postId)
        },

        //  fetch post and comments 
        toggleFetchCommentTrigger: state => {
            state.fetchCommentTrigger = !state.fetchCommentTrigger;
            console.log('trigger changed: ', state.fetchCommentTrigger);
        },

        toggleFetchPostTrigger: state => {
            state.fetchPostTrigger = !state.fetchPostTrigger;
        }

    },


})

export default deleteModalSlice.reducer;

export const { toggleDeleteCommentModal, toggleDeletePostModal, setPostId, setCommentId, toggleFetchCommentTrigger, toggleFetchPostTrigger } = deleteModalSlice.actions;