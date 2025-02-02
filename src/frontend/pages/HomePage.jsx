import { MdOutlineTravelExplore, MdOutlineAddchart, MdOutlineThumbUpAlt, MdOutlineThumbDown } from "react-icons/md";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import IndexPosts from './pageComponents/IndexPosts';

function HomePage() {
    // inherited from Layout.jsx

    return (

        <>
            {/* Left side */}
            {/* <Sidebar className={''} /> */}

            {/* center main grid */}
            <main className='bg-green-40 col-span-8 flex flex-col relative'>

                {/* <IndexPosts /> */}
                <IndexPosts className={'bg-green-40 col-span-8 flex flex-col relative'} />

                {/* footer */}
                <Footer className={'bg-white'} />
            </main>


            {/* right side */}

            <div className='col-span-2 bg-pink-40 sticky top-16 h-[calc(100vh-64px)] '>
                {/* second div */}
            </div>

        </>

    )
}

export default HomePage