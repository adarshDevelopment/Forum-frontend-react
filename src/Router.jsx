import { createBrowserRouter, createRoutesFromElements, Outlet, Route, useNavigate, Navigate } from "react-router-dom"
import Layout from './frontend/Layout';
import NotFound from "./frontend/pages/components/NotFound";
import HomePage from "./frontend/pages/HomePage";
import IndexPosts from "./frontend/pages/pageComponents/IndexPosts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/features/authSlice/authSlice";


import CreatePost from "./frontend/pages/posts/CreatePost";
// import ShowPost from "./frontend/pages/posts/ShowPost";
import ShowPost from "./frontend/pages/posts/ShowPost";


/* every time the state changes (state.auth.user), which is changed after log out and log in, the component 
       re-renders which means ProtectedRoutes get re-run after every change of the state.

       dispatching fetchUser() changes the state. which is on the Layout.jsx file. which changes after the token
       state changes. Token state changes after every login and log out. 
   */


const ProtectedRoutes = () => {


    const user = useSelector(state => state.auth.user);

    if (!user.loading && user.user) {
        return <Outlet />;
    }
    if (user.started && !user.loading && !user.isSuccess && !user.user) {
        return <Navigate to={'/'} />
    }
}

const router = createBrowserRouter(createRoutesFromElements(

    <>
        {/* Public routes */}
        <Route element={<Layout />} path="/">
            <Route path="/" element={<HomePage />} />

            <Route path="/post/:slug/:commentId?" element={<ShowPost />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoutes />} path="">
                <Route path="create_post" element={<CreatePost />} />
            </Route>

        </Route>

        <Route element={<NotFound />} path="*" />

    </>
));




export default router;