import { useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { useSelector } from 'react-redux';
import getPostData from '../../../../helperFunctions/getPostData';
import useFetch from "../../../hooks/useFetch";
import getGetData from "../../../../helperFunctions/getGetData";

function PostUpvote({ slug, }) {

    const user = useSelector(state => state.auth.user.user);


    // UI component
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});       // updates the upvotes unmber
    const [status, setStatus] = useState(0);        // for duplicate upvote


    // upvtes/slug returns post_like and post record 
    // post/upvote also return post 


    async function sendUpvote(vote) {
        setLoading(true);
        // upvoting/downvoting posts
        const upvote = await getPostData({ url: 'post/upvote', formData: { slug, user: user.id, upvoteStatus: vote } });
        // 
        const upvoteData = await getGetData({ url: `post/upvotes/${slug}` });        // fetching total upvotes post 
        if (!upvoteData.errors) {
            setPost(upvoteData.data.post.post)
            setStatusValue(upvoteData.data.post.status?.upvote_status);
        }

        
        setLoading(false);
    }

    const setStatusValue = (value) => {
        if (value == true) {
            setStatus(1);
        } else if (value == false) {
            setStatus(-1);
        }
        else {
            setStatus(0);
        }
    }
    useEffect(() => {

        const getUpvotes = async () => {
            setLoading(true);
            const upvoteData = await getGetData({ url: `post/upvotes/${slug}` });
            // console.log('posts: ', upvoteData);
            if (!upvoteData.errors) {
                setPost(upvoteData.data.post.post)      // for upvote numbers
                if (user) {
                    const value = upvoteData.data.post.status?.upvote_status;
                    setStatusValue(upvoteData.data.post.status?.upvote_status);     // for duplicate like and dislike
                }
            }
            setLoading(false);
        }
        getUpvotes();
    }, [])


    return (

        // ${status == 1 ? 'bg-indigo-100' ? status == -1 ? 'bg-orange-300' : ''}
        <div
            className={`px-4 py-2 rounded-full gap-2 flex items-center justify-between min-w-[113px]
                ${status > 0 ? 'bg-indigo-100' : status < 0 ? 'bg-orange-200' : 'bg-custom-gray-orange'}`}>
            <button
                disabled={loading}
                onClick={() => {
                    if (!user) {
                        return;
                    }
                    sendUpvote(true);

                }}
                className='text-gray-600 hover:text-indigo-700'>
                <BiLike className='text-2xl' />
            </button>

            {
                !loading ? <span className={`font-semibold ${loading ? 'rotate-x-180' : 'rotate-x-0'} `}>
                    {post.gross_votes}
                </span>
                    : <></>
            }

            <button
                disabled={loading}
                onClick={() => {
                    if (!user) {
                        return;
                    }
                    sendUpvote(false);
                }}
                className='text-2xl text-gray-600 hover:text-orange-600'>
                <BiDislike />
            </button>
        </div>
    )
}

export default PostUpvote