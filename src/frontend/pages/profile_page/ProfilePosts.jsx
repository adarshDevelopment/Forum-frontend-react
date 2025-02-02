import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

function ProfilePosts({ userPosts, profileUser, userComments }) {
    return (
        <div className="bg-indigo-10 shadow-lg flex flex-col gap- ">

            {
                <>
                    {
                        userPosts.map(post =>
                            <Link
                                to={`../post/${post.slug}`}
                                className="bg-yellow-40 flex gap-4 p-4 bg-yellow-00 items-start bg-slate-30 border-b border-gray-300 cursor-pointer hover:bg-indigo-300 "
                                key={post.id}
                            >
                                {/* left side */}
                                <div className="rounded">
                                    {
                                        profileUser.avatar
                                            ? <img
                                                className="h-[44px] w-[44px] object-cover "
                                                src={profileUser.avatar} alt="" />
                                            : <img
                                                className="h-[44px] w-[44px] object-cover "
                                                src="/images/avatarPlaceholder.webp" alt="" />
                                    }
                                </div>

                                {/* right side */}
                                <div className="flex-1 bg-red-40">
                                    {/* post title */}
                                    <div className="font-semibold">
                                        {post.title}
                                    </div>
                                    {/* post */}
                                    <div className="text-gray-600 text-sm">
                                        {
                                            post.content.length > 150
                                                ? post.content.slice(0, 100) + '...'
                                                : post.content
                                        }
                                    </div>

                                    <div className="flex gap-3 items-end">
                                        <div className="text-xs text-thin text-gray-500">
                                            {format(new Date(post.created_at), "MMMM dd, yyyy")}
                                        </div>

                                        <div>
                                        </div>
                                    </div>


                                </div>

                                <hr />
                            </Link>

                        )
                    }

                </>
            }


        </div>
    )
}

export default ProfilePosts