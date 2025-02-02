import React, { useEffect, useRef, useState } from 'react'
import { BiDislike, BiLike, BiMessageRounded } from "react-icons/bi";
import { PiTrash } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TiEdit } from "react-icons/ti";
import { toast } from 'sonner';
import { toggleDeleteCommentModal, setCommentId } from '../../../store/features/deleteModalSlice/deleteModalSlice';
import getPutData from '../../../helperFunctions/getPutData';
import { toggleFetchCommentTrigger } from '../../../store/features/deleteModalSlice/deleteModalSlice';
import getPostData from '../../../helperFunctions/getPostData';
import DeleteCommentModal from '../components/modals/DeleteCommentModal';
import { useFormState } from 'react-dom';


function CommentSection({ comments, setPost, notificationCommentId = null, loggedInUser = null, post }) {
    // comment delete stuff
    const user = useSelector(state => state.auth.user.user);        // for matching post_id and logged in user's id
    const dispatch = useDispatch();

    // ############################################################################################################################


    useEffect(() => {
        console.log('inside useEffect');
        // console.log('logged in user: ', loggedInUser);
        // console.log('notificationCommentId: ', notificationCommentId);
        if (notificationCommentId && comments && comments.some(comment => comment.id == notificationCommentId)) {
            // put the notificationCommentId on the first index

            setPost(prevState => {
                const updatedComments = [...prevState.comments_ordered];        // setting new array
                const commentIndex = updatedComments.findIndex(comment => comment.id == notificationCommentId);     // index of the notificationComment on the state array
                const [commentToMove] = updatedComments.splice(commentIndex, 1);        // removing the comment from the array
                updatedComments.unshift(commentToMove);         // prepending the object to the array
                console.log('updated comments: ', updatedComments);
                return {
                    ...prevState,
                    comments_ordered: updatedComments
                }
            })
        }
    }, [notificationCommentId, loggedInUser])
    // for edit comment 
    const textareaRef = useRef();

    // console.log('updated post outside of if: ', post.comments_ordered);

    // ############################################################################################################################
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

    const [updateLoading, setUpdateLoading] = useState(true);

    const handleUpdateForm = async () => {
        setUpdateLoading(true);
        const updateComment = editComment.comment;
        const { data, isSuccess, errors } = await getPutData({ url: `comment/${editCommnetId}`, formDadta: { comment: updateComment } });

        const updatedComment = data.data.comment;

        setUpdateLoading(false);        // setting loading to false
        toggleShowEditComment(false);       // toggle comment textarea
        setCommentId(-1);        // reset comment ID

        if (isSuccess) {
            toast.success('Comment successfully edited');

            setPost(state => ({
                ...state,
                comments_ordered: state.comments_ordered.map(item => {
                    if (item.id == updatedComment.id) {
                        return updatedComment;
                    } else {
                        return item;
                    }
                })
            }))

            dispatch(toggleFetchCommentTrigger());      // fetch comment trigger to reload comments
        }
        if (errors) {
            toast.error('')
        }
    }

    // ############################################################################################################################
    // comment upvote and downvote
    const handleUpvoteComment = async (id, upvoteStatus) => {

        // call api to handle upvote comment
        // make changes to the state

        // setUpdateLoading(true);
        const upvotedData = await getPostData({ url: 'comment/upvote', formData: { comment_id: id, upvoteStatus: upvoteStatus } });

        console.log('upvoted comment: ', upvotedData.data.updatedComment);
        const targetComment = upvotedData.data.updatedComment;

        setPost(state => ({
            ...state,
            comments_ordered: state.comments_ordered.map(comment => comment.id == targetComment.id ? targetComment : comment)

        }))

    }

    // ############################################################################################################################

    // delete comment


    const [deleteCommentId, setDeleteCommentId] = useState(-1);
    const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
    //  delete Comment
    const deleteComment = (commentId) => {
        setDeleteCommentId(commentId);
        setShowDeleteCommentModal(true);
    }

    return (
        <>
            <DeleteCommentModal
                showDeleteCommentModal={showDeleteCommentModal}
                setShowDeleteCommentModal={setShowDeleteCommentModal}
                setPost={setPost}
                deleteCommentId={deleteCommentId}
                setDeleteCommentId={setDeleteCommentId}
            />
            <div className='bg-blue-40 flex flex-col px-5 max-w-[755px] ml-28 py-6 flex-grow gap-4'>
                {
                    comments.map((comment, index) =>
                        <div key={comment.id}
                            className={`flex rounded-xl px-2 py-3 transition-all duration- ${comment.id == notificationCommentId && loggedInUser ? 'bg-yellow-50 ' : 'bg-gray-50'} `}>

                            {/* profile picture || First col*/}
                            <div className='flex items-start gap-2 h-fit rounded-full'>
                                <div className='h-[50px] w-[50px]'>
                                    {
                                        comment.user.avatar
                                            ? <img
                                                className="h-[44px] w-[44px] object-cover rounded-md "
                                                src={comment.user.avatar} alt="" />
                                            : <img
                                                className="h-[44px] w-[44px] object-cover rounded-md"
                                                src="/images/avatarPlaceholder.webp" alt="" />
                                    }
                                    {/* <img
                                        className='w-full h-full object-cover rounded-full'
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSzT6HpzeJ8HQ3Y_TT5FoFCrfBRwGvtqLoA&s" alt="" /> */}
                                </div>
                            </div>

                            {/* username, comment and Like/Disklike buttons || second col*/}
                            <div className='bg-orange-40 px-3 flex flex-col bg-red-40 w-full '>
                                {

                                    // text area replaces the whole div if toggle for edit comment is on
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

                                        // actual comments 
                                        :
                                        <div className='relative'>
                                            {/* username and actual comment  */}
                                            <div className='flex items-center'>
                                                <span className='text-sm text-gray-500'>u/{comment.user.name}</span>
                                                <span className='text-sm text-gray-500'> - 11 hours ago</span>
                                            </div>
                                            <span className=' break-all'> {comment.comment}</span>



                                            {/*  like and options*/}
                                            <div className='flex items-center gap-1 text-xl'>

                                                {/* like and disklike */}
                                                <div className='flex gap-2 items-center pr-2 min-w-[80px] justify-between'>
                                                    <button
                                                        onClick={() => { if (user) { handleUpvoteComment(comment.id, true) } }}
                                                        className={`hover:text-indigo-600 
                                                        ${comment.comment_like && comment.comment_like.length > 0 && user
                                                                ? comment.comment_like.some(like => { if (like.user_id === user?.id && like.upvote_status == true) return true; })
                                                                    ? 'text-blue-700'
                                                                    : 'text-gray-600'
                                                                : 'text-gray-600'
                                                            }
                                                    `}>
                                                        <BiLike />
                                                    </button>

                                                    <span className='text-sm font-semibold text-gray-600'>
                                                        {/* {comment.gross_votes} */}
                                                        {comments[index].gross_votes}
                                                    </span>

                                                    <button
                                                        onClick={() => { if (user) { handleUpvoteComment(comment.id, false) } }}
                                                        className={`hover:text-indigo-600 
                                                        ${comments[index].comment_like && comments[index].comment_like.length > 0 && user
                                                                ? comments[index].comment_like.some(like => { if (like.user_id === user.id && like.upvote_status == false) return true; })
                                                                    ? 'text-orange-700'
                                                                    : 'text-gray-600'
                                                                : 'text-gray-600'
                                                            }
                                                    `}>
                                                        <BiDislike />
                                                    </button>
                                                </div>
                                                {/* end of like and dislike */}


                                                <div className='flex gap-1 items-center px-2 py-2 rounded-full cursor-pointer hover:bg-custom-gray-orange'>
                                                    <BiMessageRounded />
                                                    <span className='text-sm text-gray-600 font-semibold'>Reply</span>
                                                </div>

                                                {/* Edit button */}
                                                {
                                                    user
                                                        ?
                                                        user.id == comment.user_id
                                                            ? <>
                                                                <button
                                                                    onClick={() => deleteComment(comment.id)}
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

                    )
                }
            </div >
        </>
    )

}

export default CommentSection;

// 