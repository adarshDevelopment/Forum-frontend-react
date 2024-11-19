import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { toggleDeletePostModal, setPostId } from '../../../../store/features/deleteModalSlice/deleteModalSlice';
import getDeleteData from '../../../../helperFunctions/getDeleteData';
import toast from 'react-hot-toast';

export default function DeletePostModal() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const showDelete = useSelector(state => state.toggleSlice.showDeleteModal);
    const deleteModalSlice = useSelector(state => state.deleteModalSlice.deletePost);       // contains: showDeletePostModal and postId


    const closeModal = () => {
        dispatch(setPostId(null));
        dispatch(toggleDeletePostModal(false));
    }

    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {

        setLoading(true);
        const { isDeleteSuccess, deleteErrors } = await getDeleteData({ url: 'post', id: deleteModalSlice.postId })
        setLoading(false);


        // console.log('isDeletesuccess: ', isDeleteSuccess);
        if (isDeleteSuccess) {
            // navigate('/');      // navigate to home page
            toast.success('Comment successfully deleted');
        } else {
            toast.error('Error deleting comment')
        }
        // dispatch(toggleDeletePostModal(false));

    }
    if (deleteModalSlice.showDeletePostModal) {
        return (
            <div className='bg-gray-400 bg-opacity-50 h-screen w-screen z-50 top-0 fixed flex justify-center items-center'>

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

                        <div className='text-gray-500 mt-3'>Are you sure you want to delete this post?</div>

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


