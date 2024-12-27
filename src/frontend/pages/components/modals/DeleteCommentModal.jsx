import React, { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';


import { toggleDeleteCommentModal, setCommentId } from '../../../../store/features/deleteModalSlice/deleteModalSlice';
import getDeleteData from '../../../../helperFunctions/getDeleteData';
import { toggleFetchCommentTrigger } from '../../../../store/features/deleteModalSlice/deleteModalSlice';

export default function DeleteCommentModal({ showDeleteCommentModal = false, setShowDeleteCommentModal, setPost, deleteCommentId, setDeleteCommentId }) {


    const dispatch = useDispatch();
    // const showDelete = useSelector(state => state.toggleSlice.showDeleteModal);
    const deleteModalSlice = useSelector(state => state.deleteModalSlice.deleteComment);       // contains: showDeleteModal and comment

    const closeModal = () => {
        setShowDeleteCommentModal(false);
    }

    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {

        setLoading(true);
        // delete method return the object that was deleted
        const data = await getDeleteData({ url: 'comment', id: deleteCommentId })

        // set the Post by removing the deleted comment from the array
        if (data.isDeleteSuccess) {
            setPost(state => ({
                ...state,
                comments_ordered: state.comments_ordered.filter(comment => comment.id != deleteCommentId)
            }))
        }
        if (data.deleteErrors) {
            toast.error(data.deleteErrors);
        }

        // close the modal regardless
        setDeleteCommentId(-1)
        setShowDeleteCommentModal(false);
        setLoading(false);
    }

    if (showDeleteCommentModal) {
        return (
            <div className='bg-gray-400 bg-opacity-50 h-screen w-screen z-50 top-0 fixed left-0 flex justify-center items-center'>
                <div className=' w-[500px] h-[170] px-5 py-5 bg-pink-40 flex flex-col rounded-2xl shadow-2xl justify-between bg-white'>
                    <div>
                        <div className='bg-yellow-40 flex items-center justify-between'>
                            <span className='font-bold text-xl'>Delete Comment</span>
                            <button
                                onClick={closeModal}
                                className='text-3xl text-gray-600 hover:text-gray-900'>
                                <RxCrossCircled />
                            </button>
                        </div>
                        <div className='text-gray-500 mt-3'>Are you sure you want to delete this comment?</div>
                    </div>
                    <div className='flex justify-end items-center gap-4 mt-5'>
                        <button
                            onClick={closeModal}
                            className='bg-custom-gray-orange hover:bg-custom-gray-dark px-3 py-2 rounded-lg'
                        >Cancel</button>

                        <button
                            onClick={handleDelete}
                            disabled={loading}
                            className={`bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 ${loading ? 'bg-red-600' : ''}`}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

// export default DeleteCommentModal