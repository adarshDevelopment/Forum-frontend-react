import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import { useSelector } from "react-redux";
import UserNotFound from '../error_pages/UserNotFound';
import getGetData from "../../../helperFunctions/getGetData";
import format from 'date-fns/format';
import ProfileComments from "./ProfileComments";
import ProfilePosts from "./ProfilePosts";


function ProfilePage() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [loading, setLoading] = useState(true);



    const [profileUser, setProfileUser] = useState(null);
    const [userComments, setUserComments] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    const menus = ['Posts', 'Comments'];
    const [activeMenu, setActiveMenu] = useState(0);


    // navigate to 404 page if user not found from fetched data
    useEffect(() => {
        const fetchUserDashboardData = async () => {
            const data = await getGetData({ url: `dashboard/index/${userId}` });
            if (data.errors?.status == 404) {
                navigate('*', { replace: true });
            }
            setProfileUser(data.data.data.user);
            setUserComments(data.data.data.comments);
            setUserPosts(data.data.data.posts);
            setLoading(false);
        }
        fetchUserDashboardData();
    }, [userId]);

    if (loading || !profileUser) {
        return <></>
    }
    return (
        <>
            <main className="bg-green-40 col-span-8 flex flex-col relative p-5">
                {/* image and username */}
                <div className="bg-red-40 flex items-end gap-4">
                    {
                        profileUser.avatar
                            ? <img
                                className="h-[100px] w-[100px] object-cover rounded-md"
                                src={profileUser.avatar} alt="" />
                            : <img
                                className="h-[100px] w-[100px] object-cover rounded-md"
                                src="/images/avatarPlaceholder.webp" alt="" />
                    }

                    <span className="text-bold text-2xl">
                        {profileUser.name}
                    </span>
                </div>


                {/* posts and comments menu buttons */}
                <div className="mt-5 flex space-x-3">
                    {
                        menus.map((menu, index) =>
                            <h1
                                key={index}
                                onClick={() => setActiveMenu(index)}
                                className={`border border-gray-500 px-3 rounded-lg  text-lg cursor-pointer 
                                ${activeMenu == index ? 'bg-green-600 text-white hover:purple-400' : 'text-gray-500 hover:text-gray-700 '}`}
                            >
                                {menu}
                            </h1>
                        )
                    }
                </div>

                {/* line */}
                <hr className="mt-5" />

                {/* comments */}
                {activeMenu == 0
                    ? <ProfilePosts userComments={userComments} profileUser={profileUser} userPosts={userPosts} />
                    : <ProfileComments userComments={userComments} profileUser={profileUser} />
                }


            </main>










            {/* right side */}

            <div className="col-span-2 bg-pink-400 sticky top-16-h-[calc(100vh-64px)]">
                right side
            </div>

        </>
    )
}

export default ProfilePage