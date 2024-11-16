import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import { CgProfile } from "react-icons/cg";
import { BiDislike, BiLike, BiMessageSquare, BiShareAlt, BiMessageRounded } from "react-icons/bi";
import { Link } from 'react-router-dom';

import getPostData from '../../../helperFunctions/getPostData';

import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import CommentSection from './CommentSection';

function ShowPost() {

    // useFetch to fetch post and comments
    const { slug } = useParams();

    const [fetchTrigger, setFetchtrigger] = useState(false);
    const { data, loading, errors, isSuccess } = useFetch({ url: `post/${slug}`, fetchTrigger: fetchTrigger });



    // comment text area/input toggle
    const [showTextField, setShowTextField] = useState(false);
    const textareaRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [showTextField])

    const handleInput = () => {
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
        console.log('comment data: ', commentData);

        if (commentData.isSuccess) {
            toast.success('Comment successfuly posted');
            textareaRef.current.blur();
            setComment('');
            setFetchtrigger(state => !state);
        }
        if (commentData.errors) {
            toast.error('Error posting comment');
        }
    }



    // return component part
    if (!loading && isSuccess && data.post) {

        const post = data.post.post;
        const user = data.post.user;
        const tag = data.post.tag;
        const comments = data.post.comments;

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
                        <div className='text-2xl font-semibold mb-3 mt-2'>
                            {post.title}
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
                        <div className='mt-2'>
                            {post.content}
                        </div>


                        {/* Like and comments numbers */}
                        <div className='bg-red-40 w-full flex bg-red-40 mt-6 gap-4 text-gray-600 mb-6'>

                            {/* likes */}
                            <div className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center '>
                                <button className='text-gray-600 hover:text-indigo-600'>
                                    <BiLike className='text-2xl' />
                                </button>

                                <span className='font-semibold'>5</span>


                                <button className='text-2xl text-gray-600 hover:text-orange-600'>
                                    <BiDislike />
                                </button>
                            </div>

                            {/* comments */}

                            <div className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center flex-row hover:bg-custom-gray-dark cursor-pointer'>

                                <div className='font-semibold flex gap-3 items-center'>
                                    <button>
                                        <BiMessageSquare className='text-2xl' />
                                    </button>

                                    <span>10</span>
                                </div>
                            </div>

                            <div className='bg-custom-gray-orange px-4 py-2 rounded-full gap-3 flex items-center hover:bg-custom-gray-dark cursor-pointer'>

                                <button className='text-2xl'>
                                    <BiShareAlt />
                                </button>

                            </div>

                        </div>

                        {/* Comment text field */}
                        <div className=' w-full flex flex-col'>

                            {
                                showTextField
                                    ? <div className='relative flex flex-col border border-gray-500 rounded-2xl'>


                                        <textarea
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
                                                disabled={commenLoading}
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

                    <CommentSection comments={comments} />





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