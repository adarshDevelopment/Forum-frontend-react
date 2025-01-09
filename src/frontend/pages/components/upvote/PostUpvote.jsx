import { useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { useSelector } from 'react-redux';
import getPostData from '../../../../helperFunctions/getPostData';
import useFetch from "../../../hooks/useFetch";
import getGetData from "../../../../helperFunctions/getGetData";

function PostUpvote({ slug, post, setPost }) {

    const user = useSelector(state => state.auth.user.user);


    // UI component
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(0);        // for duplicate upvote

    // upvotes the post. returns updated post with upvotes and postLke which contains upvote_status
    async function sendUpvote(vote) {
        // returns $post with updated upvotes and PostLike
        const { data } = await getPostData({ url: 'post/upvote', formData: { slug, user: user.id, upvoteStatus: vote } });
        setPost(state => ({ ...state, gross_votes: data.updatedPost.post.gross_votes }));

        if (!data.updatedPost.postLike) {   // if empty simply set status to 0 and return
            setStatus(0);
            return;
        }
        setStatusValue(data.updatedPost.postLike.upvote_status);
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

    // calls the getUpvoteStatus api to set the upvote color
    useEffect(() => {
        setLoading(true);
        //  check if user logged in 
        if (!user) {
            setLoading(false);
            return;
        }
        const fetchUpvoteStatus = async () => {
            const { data } = await getGetData({ url: `post/upvoteStatus/${slug}` });
            // if data does not exist or if post user is not equal to the logged in user (no need to check user because it always fetches logged in user postLike)
            if (!data.upvoteStatus || data.upvoteStatus.user_id != user.id) {
                setStatus(0);
                return;
            }
            // set status value 
            setStatusValue(data.upvoteStatus.upvote_status);
        }
        fetchUpvoteStatus();
        setLoading(false);
    }, [])

    if (!loading) {
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
                    <span className={`font-semibold ${loading ? 'rotate-x-180' : 'rotate-x-0'} `}>
                        {post.gross_votes}
                    </span>
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

}

export default PostUpvote