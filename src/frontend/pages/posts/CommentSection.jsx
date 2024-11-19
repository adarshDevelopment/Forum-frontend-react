import React, { useEffect, useRef, useState } from 'react'
import { BiDislike, BiLike, BiMessageRounded } from "react-icons/bi";
import { PiTrash } from "react-icons/pi";
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TiEdit } from "react-icons/ti";
import { toast } from 'sonner';
import { toggleDeleteCommentModal, setCommentId } from '../../../store/features/deleteModalSlice/deleteModalSlice';
import getPutData from '../../../helperFunctions/getPutData';
import { toggleFetchCommentTrigger } from '../../../store/features/deleteModalSlice/deleteModalSlice';


function CommentSection({ comments }) {
 console.log('inside commentSection');
    // comment delte stuff
    const user = useSelector(state => state.auth.user.user);        // for matching post_id and logged in user's id
    const dispatch = useDispatch();

    
    // for edit comment 
    const textareaRef = useRef();

    const handleInput = (e) => {
        if (textareaRef.current) {
            // increase the textarea height as the user keeps typing so scrollbar does not appear 
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }


    const [showEditComment, toggleShowEditComment] = useState(false);   // toggle for text area
    const [editCommnetId, setEditCommentId] = useState(-1);     // current comment to be edited

    const [editComment, setEditComment] = useState({});     // content of current comment being edited

    //  useEffect to set the the selected comment to the the editComment useState
    useEffect(() => {
        if (editCommnetId && comments) {
            const foundComment = comments.find(comment => comment.id == editCommnetId);
            setEditComment(foundComment);
        }

    }, [editCommnetId])

    const [updateLoading, setUpdateLoading] = useState(false);

    const handleUpdateForm = async () => {
        setUpdateLoading(true);
        console.log('comment: ', editComment.comment);
        const updateComment = editComment.comment;
        const { isSuccess, errors } = await getPutData({ url: `comment/${editCommnetId}`, formDadta: { comment: updateComment } });
        setUpdateLoading(false);        // setting loading to false
        toggleShowEditComment(false);       // toggle comment textarea
        setCommentId(-1);        // reset comment ID

        if (isSuccess) {
            toast.success('Comment successfully edited');
            dispatch(toggleFetchCommentTrigger());      // fetch comment trigger to reload comments
        }
        if (errors) {
            toast.error('')
        }
    }

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
                    <div className='bg-orange-40 px-3 flex flex-col bg-red-40 w-full '>
                        hello world
                        {

                            showEditComment && comment.id == editCommnetId
                                ?

                                <div className='relative flex flex-col border border-gray-500 rounded-2xl bg-white'>
                                    {/* actual text area */}
                                    <textarea
                                        required
                                        onInput={handleInput}
                                        value={editComment?.comment}
                                        onChange={e => setEditComment({ ...editComment, comment: e.target.value })}
                                        ref={textareaRef}
                                        className=' w-full min-h-[100px] focus:outline-none px-3 py-3 border-0 rounded-2xl'
                                    >
                                    </textarea >


                                    {/* cancel and cave buttons */}
                                    <div className=' right-3 bottom-3 flex justify-end p-2 gap-2'>
                                        <button
                                            onClick={() => {
                                                setEditCommentId(false);
                                                toggleShowEditComment(false);
                                            }}
                                            className='bg-custom-gray-orange px-3 py-2 rounded-full font-semibold hover:bg-custom-gray-dark'
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            onClick={handleUpdateForm}
                                            // disabled={postUpdateLoading || !postContent}
                                            className={`bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full font-semibold ${updateLoading ? 'bg-indigo-700' : ''}`}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div >

                                : <div className='relative'>

                                    {/* username and actual comment  */}
                                    <div className='flex items-center'>
                                        <span>u/{comment.user.name}</span>
                                        <span className='text-sm text-gray-500'> - 11 hours ago</span>
                                    </div>
                                    <span className=' break-all'> {comment.comment}</span>
                                    {/* <span>lorem</span> */}



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
                                                    ? <>
                                                        <button
                                                            onClick={() => {
                                                                dispatch(setCommentId(comment.id));
                                                                dispatch(toggleDeleteCommentModal());
                                                            }}
                                                            className='p-2 rounded-full hover:bg-custom-gray-orange font-semibold'>
                                                            <PiTrash />
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                setEditCommentId(comment.id);
                                                                const foundComment = comments.find(comment => comment.id == editCommnetId);
                                                                toggleShowEditComment(true);
                                                                textareaRef.current.focus;
                                                            }}
                                                            className='text-gray-700 p-2 rounded-full text-xl hover:bg-custom-gray-orange font-semibold'>
                                                            <TiEdit />
                                                        </button>
                                                    </>
                                                    : <></>
                                                : <></>
                                        }

                                    </div>

                                </div>

                        }




                    </div>


                </div>

            )}

            {/* single comment */}




        </div>

    )

}

export default CommentSection;

// 