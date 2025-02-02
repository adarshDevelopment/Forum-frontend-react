import { Link } from "react-router-dom"
import { format } from "date-fns"

function ProfileComments({ userComments, profileUser }) {
    return (
        <div className="bg-indigo-10 shadow-lg flex flex-col gap- ">

            {
                userComments
                    ? <>
                        {
                            userComments.map(comment =>
                                <Link
                                    to={`../post/${comment.post.slug}/${comment.id}`}
                                    className="bg-yellow-40 flex gap-4 p-4 bg-yellow-00 items-start bg-slate-30 border-b border-gray-300 cursor-pointer hover:bg-indigo-300 "
                                    key={comment.id}
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
                                        <div className=" ">
                                            <span className="text-gray-600"> {profileUser.name}  </span>
                                            <span className="text-sm text-gray-500">commented on </span>
                                            <span className="text-gray-600">{comment.post.title}</span>
                                        </div>
                                        {/* comment */}
                                        <div className="text-gray-700 font-semibold">
                                            {
                                                comment.comment.length > 100
                                                    ? comment.comment.slice(0, 100) + '...'
                                                    : comment.comment
                                            }
                                        </div>

                                        <div className="flex gap-3 items-end">
                                            <div className="text-xs text-thin text-gray-500">
                                                {format(new Date(comment.created_at), "MMMM dd, yyyy")}
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
                    : <></>
            }


        </div>
    )
}

export default ProfileComments