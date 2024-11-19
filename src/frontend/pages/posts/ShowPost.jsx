import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import { CgProfile } from "react-icons/cg";
import { BiDislike, BiLike, BiMessageSquare, BiShareAlt, BiMessageRounded } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import getPostData from '../../../helperFunctions/getPostData';

import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import CommentSection from './CommentSection';

import { useDispatch } from 'react-redux';
// change the fetchValue to change the dependency on useFetch post's useEffect
import { setCommentId, toggleDeletePostModal, toggleDeleteCommentModal, toggleFetchCommentTrigger, toggleFetchPostTrigger, setPostId } from '../../../store/features/deleteModalSlice/deleteModalSlice';
import { TiEdit } from "react-icons/ti";

import getPutData from '../../../helperFunctions/getPutData';

import { useNavigate } from 'react-router-dom';
import PostUpvote from '../components/upvote/PostUpvote';


function ShowPost() {
    const navigate = useNavigate();
    // useFetch to fetch post and comments
    const { slug } = useParams();
    const fetchCommentTrigger = useSelector(state => state.deleteModalSlice.fetchCommentTrigger)
    const fetchPostTrigger = useSelector(state => state.deleteModalSlice.fetchPostTrigger)
    const dispatch = useDispatch();
    const { data, loading, errors, isSuccess } = useFetch({ url: `post/${slug}`, fetchTrigger: fetchPostTrigger })
    // console.log('top data: ', data);

    if (errors?.status == 404) {
        toast.error('Post not found');
        navigate('/')
    }
    // if 404 error?
    // if(errors.)

    const loggedInUser = useSelector(state => state.auth.user.user);

    //  using state fetchCommentTrigger to refrehs comment section if user creates or deletes a comment
    const comments = useFetch({ url: `comment/${slug}`, fetchTrigger: fetchCommentTrigger });
    const commentList = comments.data?.comments;

    // ###########################################################################

    // comment text area/input toggle
    const [showTextField, setShowTextField] = useState(false);
    const textareaRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [showTextField])

    const handleInput = (e) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }


    // post submission:
    const [comment, setComment] = useState('');
    const [commenLoading, setCommentLoading] = useState(false);
    const handleSubmitForm = async () => {
        setCommentLoading(true);

        // const { data, isSuccess, errors }
        const commentData = await getPostData({ url: 'comment', formData: { comment, slug } });
        setCommentLoading(false);
        // console.log('comment data: ', commentData);

        if (commentData.isSuccess) {
            toast.success('Comment successfuly posted');
            textareaRef.current.blur();
            setComment('');

            // udpate fetchtrigger to update the commetns
            dispatch(toggleFetchCommentTrigger());
        }
        if (commentData.errors) {
            toast.error('Error posting comment');
        }
    }
    // End of post submission


    // Edit post
    const [isEdit, setIsEdit] = useState(false);
    const [postContent, setPostContent] = useState('');
    const postTextAreaRef = useRef();
    const handlePostInput = (e) => {        // to expand textarea length as the user types more content
        if (postTextAreaRef.current) {
            postTextAreaRef.current.style.height = 'auto';
            postTextAreaRef.current.style.height = `${postTextAreaRef.current.scrollHeight}px`
        }
    }

    useEffect(() => {
        // console.log('data inside useEffect: ', data?.post.post.content);
        setPostContent(data?.post?.post.content);
    }, [data])

    //  update submission
    const [postUpdateLoading, setPostUpdateeLoading] = useState(false);
    const handleUpdateForm = async () => {
        setPostUpdateeLoading(true);
        const { isSuccess, errors } = await getPutData({ url: `post`, slug, formDadta: { slug, content: postContent } });
        setPostUpdateeLoading(false);

        console.log('isScuccess: ', isSuccess);
        if (errors && !isSuccess) {
            toast.error('Error updating post');
        }
        if (isSuccess) {
            toast.success('Post successfully updated');
            setIsEdit(false);
            dispatch(toggleFetchPostTrigger());
        }


    }



    // end of edit post

    // return component part
    if (!loading && isSuccess && data?.post) {

        const post = data.post.post;
        const user = data.post.user;
        const tag = data.post.tag;
        // const comments = data.post.comments;


        console.log('comment: ', data.post.comments.length);
        return (
            <>
                {/* center main grid */}
                <main className='bg-green-40 col-span-8 flex flex-col relative p-5'>

                    {/* post section */}


                    <div className='bg-green-40 flex flex-col relative bg-yellow-40 px-5 max-w-[755px] ml-28 py-6'>

                        {/* profile info */}
                        <div className="bg-green-40 flex gap-2 items-start">
                            <CgProfile className='text-5xl' />
                            <div className='flex flex-col bg-blue-40'>
                                <span className='font-semibold'>{user.name}</span>
                                <span className="text-sm text-gray-600">5 hrs ago</span>
                            </div>

                        </div>

                        {/* title */}
                        <div className=' mb-3 mt-2 bg-red-40 flex justify-between items-start'>
                            <span className='text-2xl font-semibold'>
                                {post.title}
                            </span>
                        </div>


                        {/* Tag */}
                        {
                            tag
                                ? <Link className=' w-fit bg-indigo-600 px-3 py-1 rounded-full text-white hover:bg-indigo-700'>
                                    {tag.title}
                                </Link>
                                : <></>
                        }


                        {/* content */}
                        {/* Also edit here */}

                        {
                            isEdit

                                ? (
                                    <div className='relative flex flex-col border border-gray-500 rounded-2xl' >
                                        <textarea
                                            required
                                            onInput={handlePostInput}
                                            value={postContent}
                                            onChange={e => setPostContent(e.target.value)}
                                            ref={textareaRef}
                                            className=' w-full min-h-[100px] focus:outline-none px-3 py-3 border-0 rounded-2xl'
                                            name="" id="" placeholder=''
                                        >
                                        </textarea>


                                        <div className=' right-3 bottom-3 flex justify-end p-2 gap-2'>
                                            <button
                                                onClick={() => { setIsEdit(false); }}
                                                className='bg-custom-gray-orange px-3 py-2 rounded-full font-semibold hover:bg-custom-gray-dark'
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                onClick={handleUpdateForm}
                                                disabled={postUpdateLoading || !postContent}
                                                className={`bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full font-semibold ${commenLoading ? 'bg-indigo-700' : ''}`}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div >



                                )
                                : <div className='mt-2'>

                                    {post.content}
                                </div>
                        }



                        {/* Like and comments numbers */}
                        <div className='bg-red-40 w-full flex bg-red-40 mt-6 gap-4 text-gray-600 mb-6'>

                            {/* likes */}

                            <PostUpvote slug={slug} />

                            {/* comments */}

                            <div className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center flex-row hover:bg-custom-gray-dark cursor-pointer'>

                                <div className='font-semibold flex gap-3 items-center'>
                                    <button>
                                        <BiMessageSquare className='text-2xl' />
                                    </button>

                                    <span>{data.post?.comments.length}</span>
                                </div>
                            </div>

                            <div className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center hover:bg-custom-gray-dark cursor-pointer'>

                                <button className='text-2xl'>
                                    <BiShareAlt />
                                </button>

                            </div>



                            {
                                // weather or not to show the edit button
                                loggedInUser ?
                                    loggedInUser.id == user.id
                                        ?
                                        <>
                                            <div
                                                onClick={() => { setIsEdit(true); setShowTextField(false) }}
                                                className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center hover:bg-custom-gray-dark cursor-pointer'>
                                                <button
                                                    className='text-2xl font-bold text-gray-700 p- hover:bg-custom-gray-orange rounded-xl '>
                                                    <TiEdit />
                                                </button>

                                            </div>


                                            <div
                                                onClick={() => { dispatch(setPostId(post.id)); dispatch(toggleDeletePostModal()) }}
                                                className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center hover:bg-custom-gray-dark cursor-pointer'>
                                                <button
                                                    className='text-xl font-bold text-gray-700 p- hover:bg-custom-gray-orange rounded-xl '>
                                                    <FaRegTrashCan />
                                                </button>

                                            </div>
                                        </>

                                        : <></>
                                    : <></>
                            }


                        </div>

                        {/* Comment text field */}
                        <div className=' w-full flex flex-col'>

                            {
                                showTextField
                                    ? <div className='relative flex flex-col border border-gray-500 rounded-2xl'>


                                        <textarea
                                            required
                                            onInput={handleInput}
                                            value={comment}
                                            onChange={e => setComment(e.target.value)}
                                            ref={textareaRef}
                                            className=' w-full min-h-[100px] focus:outline-none px-3 py-3 border-0 rounded-2xl'
                                            name="" id="" placeholder=''
                                        >

                                        </textarea>

                                        <div className=' right-3 bottom-3 flex justify-end p-2 gap-2'>
                                            <button
                                                onClick={() => { setShowTextField(false); }}
                                                className='bg-custom-gray-orange px-3 py-2 rounded-full font-semibold hover:bg-custom-gray-dark'
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                onClick={handleSubmitForm}
                                                disabled={commenLoading || !comment}
                                                className={`bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full font-semibold ${commenLoading ? 'bg-indigo-700' : ''}`}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>


                                    : <input
                                        ref={inputRef}
                                        onFocus={() => { setShowTextField(true) }}
                                        className='w-full border border-black py-3 px-3 rounded-full focus:outline-none focus:border-blue-400'
                                        placeholder='Enter comment'
                                        type="text"
                                    />
                            }


                        </div>

                    </div>




                    {/* comment section */}

                    {
                        !comments.loading && comments.isSuccess
                            ?
                            commentList
                                ? <CommentSection comments={commentList} />
                                : <></>
                            : <></>
                    }


                    <Footer className={'bg-white'} />
                </main>

                {/* right side */}

                <div className='col-span-2 bg-pink-400 sticky top-16 h-[calc(100vh-64px)] '>
                    second div
                </div>

            </>
        )
    }
}


export default ShowPost