1. Application features:
    Login
    Register
    Post blog
    Post pictures in blog
    Tag appropriate blogs/threads
    Reply to thread
    Like Thread
    Star thread
    Save Thread
    Favorite thread
    




Tailwind Tips:

1. object-cover: this class does not stretch the image and crops it 
2. overflow-hidden: hides overflown elements 
3. focus-outline-none: removes the thick annyoing border when focusing
4. to learn about flex, open Flex.jsx



React Router setup:

1. install react router: npm install react-router-dom
2. createBrowserRouter: This function is used to create a router instance for a web application. It expects an array of route objects.
    createRoutesFromElements: This function converts JSX elements (like <Route>) into a format that createBrowserRouter can use.

    <Route> Component: Each <Route> component expects path and element props. The path prop defines the URL path, while the element prop specifies the React component to render for that path.





1. Profile page
    1. notification -> done
    2. profile dropdown -> done
    3. search 
    4. +create page
    5. message/chat
    6. dark mode toggle button


<main className='bg-green-40 col-span-8 flex flex-col relative'>

            <center className='flex-grow flex-shrink-0 p-5'>
                {/* posts */}
                <div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div>

                <div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div><div className="bg-gray-40 flex flex-col bg-orange-40 border-t">

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
                                        <span className='text-gray-600 text-sm'>r/SubName</span>
                                        <span className='text-gray-400 text-xs'>. 1 hr ago</span>
                                    </div>

                                    <span className='text-gray-400 text-xs'>Promoted</span>
                                </div>

                                {/* title */}
                                <div className=' w-full bg-slate-40 overflow-hidden font-semibold text-lg' >
                                    Need help replacing gpu thermal paste
                                </div>


                                {/* buttons */}
                                <div className='flex gap-1 flex-shrink-0 flex-grow-0 bg-orange-40'>

                                    {/* upvote/downvote */}
                                    <div className='bg-custom-gray-dark px-3 py-1 rounded-full gap-3 flex items-center '>
                                        <span className='text-indigo-600'>
                                            <MdOutlineThumbUpAlt className='text-lg' />
                                        </span>
                                        <span>5</span>
                                        <span className='text-red-600'><MdOutlineThumbDown className='text-lg' /></span>
                                    </div>


                                    {/* Comments */}
                                    <div className='hover:bg-custom-gray-dark flex gap-1 items-center rounded-full px-4 py-1 text-sm'>
                                        <span>14</span>
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


                </div>


            </center>


        </main>
