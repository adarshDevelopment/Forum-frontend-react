import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from './frontend/Layout';
import NotFound from "./frontend/pages/components/NotFound";
import IndexPosts from "./frontend/pages/IndexPosts";

const router = createBrowserRouter(createRoutesFromElements(
    
    <>

    {

    }
        <Route element={<Layout />} path="/">
            <Route path="/" element={<IndexPosts />} />

        </Route>


        <Route path="*" element={<NotFound />} />
    </>
));

export default router;