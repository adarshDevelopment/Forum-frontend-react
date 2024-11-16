import React, { useEffect, useRef, useState } from 'react'
import { BiDislike, BiLike, BiMessageRounded } from "react-icons/bi";
import { PiTrash } from "react-icons/pi";
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { toggleDeleteModal, setDeleteId } from '../../../store/features/deleteModalSlice/deleteModalSlice';

function CommentSection({ comments }) {

    // comment delte stuff
    const user = useSelector(state => state.auth.user.user);        // for matching post_id and logged in user's id
    const [deleteId, setDeletId] = useState(null);
    const dispatch = useDispatch();

    return (
        <div className='bg-blue-40 flex flex-col px-5 max-w-[755px] ml-28 py-6 flex-grow gap-4'>

            {comments.map(comment =>
                <div key={comment.id} className='bg-purple-40 flex bg-gray-50 rounded-xl p-2'>


                    {/* profile picture || First col*/}
                    <div className='flex items-start gap-2 h-fit rounded-full'>
                        <div className='h-[50px] w-[50px]'>
                            <img
                                className='w-full h-full object-cover rounded-full'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSzT6HpzeJ8HQ3Y_TT5FoFCrfBRwGvtqLoA&s" alt="" />
                        </div>
                    </div>

                    {/* username, comment and Like/Disklike buttons || second col*/}
                    <div className='bg-orange-40 px-3 flex flex-col  '>
                        <div className='relative'>

                            {/* username and actual comment  */}
                            <div className='flex items-center'>
                                <span>u/{comment.user.name}</span>
                                <span className='text-sm text-gray-500'> - 11 hours ago</span>
                            </div>
                            <span> {comment.comment}</span>



                            {/*  like and options*/}
                            <div className='flex items-center gap-1 text-xl'>

                                {/* like and disklike */}
                                <div className='flex gap-2 items-center pr-2'>
                                    <button className='hover:text-indigo-600'>
                                        <BiLike />
                                    </button>

                                    <span className='text-sm font-semibold text-gray-600'>
                                        42
                                    </span>

                                    <button className='hover:text-red-500'>
                                        <BiDislike />
                                    </button>
                                </div>
                                {/* end of like and dislike */}


                                <div className='flex gap-1 items-center px-2 py-2 rounded-full cursor-pointer hover:bg-custom-gray-orange'>
                                    <BiMessageRounded />
                                    <span className='text-sm text-gray-600 font-semibold'>Reply</span>
                                </div>

                                {
                                    user
                                        ?
                                        user.id == comment.user_id
                                            ? <button
                                                onClick={() => {
                                                    dispatch(setDeleteId(comment.id));
                                                    dispatch(toggleDeleteModal());
                                                }}
                                                className='p-2 rounded-full hover:bg-custom-gray-orange font-semibold'>
                                                <PiTrash />
                                            </button>
                                            : <></>
                                        : <></>
                                }

                            </div>

                        </div>


                    </div>


                </div>

            )}

            {/* single comment */}




        </div>

    )

}

export default CommentSection