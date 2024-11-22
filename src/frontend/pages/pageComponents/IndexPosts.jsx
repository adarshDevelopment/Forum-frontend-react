import React from 'react'
import useFetch from '../../hooks/useFetch';
import { MdOutlineThumbUpAlt, MdOutlineThumbDown } from "react-icons/md";
import { Link } from 'react-router-dom';

function IndexPosts() {


    // fetchPosts('http://127.0.0.1:8000/api/posts');

    
    const { data, loading, errors } = useFetch({ url: 'posts' });
    console.log('index post: ', data);
    // if (loading) {
    //     return <>Loading...</>
    // }

    if (errors) {
        console.log(errors);
    }


    return (

        <>
            <main className='bg-green-40 col-span-8 flex flex-col relative'>

                <center className='flex-grow flex-shrink-0 p-5 bg-red-40'>

                    {



                        data ?
                            // <>hello</>

                            data.posts.map((post) =>

                                <Link to={`/post/${post.slug}`} key={post.id} className="bg-gray-40 flex flex-col bg-orange-40 border-t ">

                                    <div className='bg-green-40 border-b'>
                                        <div className='bg-purple-40 flex py-4 px-3 max-h-32 gap-3 overflow-hidden rounded-md hover:bg-custom-gray-light bg-orange-40 my-2 cursor-pointer'>


                                            {/* left part image */}
                                            <div className='items-center flex'>
                                                <div className='  h-[96px] bg-indigo-40 rounded-md  bg-red-40'>
                                                    <img className='h-full w-full object-cover rounded-md' src="https://people.com/thmb/d72gkdnwShOp-jxpT3mCjdhu2xA=/400x262/filters:no_upscale():max_bytes(150000):strip_icc()/Kanye-West-is-seen-inlos-angeles-071024-d34d1b20208b429c8724057d9ab0ec85.jpg" alt="" />
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
                                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                                        <span className='text-indigo-600'>
                                                            <MdOutlineThumbUpAlt className='text-lg' />
                                                        </span>
                                                        <span>{post.gross_votes}</span>
                                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
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
                            :
                            <></>
                    }

                    {/* posts */}





                </center>


            </main>


        </>


    )
}

export default IndexPosts