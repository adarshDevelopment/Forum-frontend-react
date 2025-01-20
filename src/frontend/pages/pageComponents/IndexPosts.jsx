import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { MdOutlineThumbUpAlt, MdOutlineThumbDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getPostData from '../../../helperFunctions/getPostData';
import getGetData from '../../../helperFunctions/getGetData';

function IndexPosts() {

    const user = useSelector(state => state.auth.user.user);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getGetData({ url: 'posts' });
            if (!data.errors) {
                setPosts(data.data.posts);
            }

        }
        fetchPosts();
    }, [])

    // upvotes post. returns the newly updated post with post with postLike
    const handleUpvotePost = async (postSlug, upvoteStatus) => {
        const data = await getPostData({ url: 'post/upvote', formData: { user: user.id, slug: postSlug, upvoteStatus } })
        // udpate the post.gross_Votes with the new value 
        if (!data.errors) {
            setPosts(prevState => prevState.map(post => {
                if (post.slug == postSlug) {
                    return { ...post, gross_votes: data.data.updatedPost.post.gross_votes, post_like: data.data.updatedPost.post.post_like };
                }
                return post;
            }));
        }
    }

    if (posts && posts.length > 0) {
        return (
            <>
                <main className='bg-green-40 col-span-8 flex flex-col relative'>

                    <center className='flex-grow flex-shrink-0 p-5 bg-red-40'>

                        {
                            posts.map((post) =>

                                // 
                                <Link to={`/post/${post.slug}`} key={post.id} className="bg-gray-40 flex flex-col bg-orange-40 border-t ">

                                    <div className='bg-green-40 border-b'>
                                        <div className='bg-purple-40 flex py-4 px-3 max-h-32 gap-3 overflow-hidden rounded-md hover:bg-custom-gray-light bg-orange-40 my-2 cursor-pointer'>


                                            {/* left part image */}
                                            <div className='items-center flex'>
                                                <div className='  h-[96px] bg-indigo-40 rounded-md  bg-red-40'>
                                                    <img className='h-full w-full object-cover rounded-md' src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=" alt="" />
                                                </div>

                                            </div>

                                            {/* right parrt text */}
                                            <div className='flex flex-col justify-between bg-red-40 text-start px-2 w-full flex-grow overflow-hidden bg-red-40'>

                                                {/* sub name and time */}
                                                <div className='bg-orange-40 flex w-fit gap-2 items-center'>
                                                    <div className='flex gap-1 items-center'>
                                                        {/* <span className='text-gray-600 text-sm'>r/SubName</span> */}
                                                        <span className='text-gray-600 text-sm'>{post.user.name}</span>
                                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                                    </div>

                                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                                </div>

                                                {/* title */}
                                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                                    {post.title}
                                                </div>


                                                {/* buttons */}
                                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                                    {/* upvote/downvote */}
                                                    <div
                                                        onClick={e => e.preventDefault()}
                                                        className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                                        <button

                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                // e.stopPropagation();
                                                                handleUpvotePost(post.slug, true)
                                                            }}
                                                            className={` 
                                                                ${user && post.post_like && post.post_like.length > 0
                                                                    ? post.post_like.some(like => user.id == like.user_id && like.upvote_status)
                                                                        ? 'text-blue-600'
                                                                        : 'text-gray-600'
                                                                    : 'text-gary-600'
                                                                }`}
                                                        >
                                                            <MdOutlineThumbUpAlt className='text-lg' />
                                                        </button>
                                                        <span>{post.gross_votes}</span>

                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                // e.stopPropagation();
                                                                handleUpvotePost(post.slug, false)
                                                            }}
                                                            className={` 
                                                            ${user && post.post_like && post.post_like.length > 0
                                                                    ? post.post_like.some(like => user.id == like.user_id && !like.upvote_status)
                                                                        ? 'text-red-600'
                                                                        : 'text-gray-600'
                                                                    : 'text-gary-600'
                                                                }`}
                                                        >
                                                            <MdOutlineThumbDown className='text-lg' />
                                                        </button>
                                                    </div>


                                                    {/* Comments */}
                                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                                        <span>{post.comments.length}</span>
                                                        <span>Comments</span>
                                                    </div>

                                                    {/* Share */}
                                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                                        <span>Share</span>
                                                    </div>

                                                    {/* Save */}
                                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                                        <span>Save</span>
                                                    </div>


                                                    {/* Hide */}
                                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                                        <span>Hide</span>
                                                    </div>


                                                    {/* Report */}
                                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                                        <span>Report </span>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </center>

                </main >
            </>
        )
    }
}

export default IndexPosts