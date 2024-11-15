import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import IndexPosts from '../pageComponents/IndexPosts';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setSuccessPost } from '../../../store/features/successSlice/successSlice';


// import { useGetPostData } from '../../HooksIndex'
import getPostData from '../../../helperFunctions/getPostData';
import { toast } from 'sonner';

function CreatePost() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tag_id: ''
    })

    const [fieldErrors, setFieldErrors] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [requestLoading, setRequestLoading] = useState(false);        // post request loading status

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setFieldErrors(null);
        setRequestLoading(true);

        const { data, errors, isSuccess } = await getPostData({ url: 'post', formData: formData });
        setRequestLoading(false);
        if (errors && errors.errors) {
            console.log('errors.errors: ', errors.errors);
            setFieldErrors(errors.errors);
        }

        console.log("field Errors: ", errors);

        console.log('errors: ', errors);
        if (errors && !errors.status) {        // status because api sends status when an exception occurs
            console.log('inside errors status: ', errors);
            // fire toaste
            toast.error('Internal Server error!')
        }


        if (isSuccess && !requestLoading) {
            const slug = data.post.slug;

            // navigate to post page
            dispatch(setSuccessPost(true));
            navigate(`/post/${slug}`)
            toast.success('Post successfully added')
        }

    }

    


    const { data, loading } = useFetch({ url: 'tag' })



    // UI element
    const [titleFocus, setTitleFocus] = useState(false);
    // end of UI element


    const tags = data?.tags;
    // console.log('tags: ', tags)


    // clear the post after submitting and redirect the use to the created post

    if (!loading) {
        return (

            <>
                {/* center main grid */}
                <main className='bg-green-40 col-span-8 flex flex-col relative p-5'>


                    <main className='bg-green-40 flex-grow flex flex-col relative'>

                        <form onSubmit={handleSubmitForm}>

                            <div className='bg-red-40 w-full flex flex-col p-4 gap-2'>

                                <h2 className='text-2xl font-semibold text-gray-600'>
                                    Create Post
                                </h2>


                                {/* Add falir/tag */}
                                <div>
                                    <select
                                        onChange={(e) => setFormData({ ...formData, tag_id: e.target.value })}
                                        value={formData.tag_id}
                                        className='border py-2 px-4 bg-custom-gray-light rounded-full w-52 appearance-none'
                                    >
                                        <option value="-1">None</option>
                                        {
                                            tags?.map(tag => (
                                                <option key={tag.id} value={tag.id}>{tag.title}</option>
                                            ))
                                        }

                                    </select>
                                </div>


                                {/* title */}
                                <div className=' relative'>
                                    <span className={`absolute flex left-3 transition-all duration-200 text-gray-500 ${(titleFocus || formData.title) ? 'top-1 text-sm' : 'top-3 text-lg'} `}>
                                        Title <span className='text-red-600'>*</span>
                                    </span>


                                    {
                                        fieldErrors && fieldErrors.title
                                            ? <span className='absolute top-2 right-5 text-red-600'>{fieldErrors?.title[0]} * </span>
                                            : ''
                                    }

                                    <input
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        onFocus={() => setTitleFocus(true)}
                                        onBlur={() => setTitleFocus(false)}
                                        className='border rounded-lg pt-6 pb-2 px-3 focus:outline-none focus:border-gray-600 w-full'
                                        type="text"
                                    />
                                </div>


                                <textarea

                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    placeholder='Body'
                                    className='rounded-lg border border-gray-300 focus:outline-none p-3 focus:border-gray-600 '
                                    name=""
                                    id=""
                                    rows={10}
                                >

                                </textarea>

                                {/* errors */}
                                {
                                    fieldErrors && fieldErrors.content
                                        ? <span className=' text-red-600'>{fieldErrors?.content[0]} * </span>
                                        : ''
                                }

                                {/* Post button */}
                                <div>
                                    <button
                                        disabled={requestLoading}
                                        className={`border px-4  py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-800 text-white font-semibold ${requestLoading ? 'bg-indigo-800' : ''}`}
                                    >
                                        Post
                                    </button>
                                </div>

                            </div>

                        </form>

                    </main>

                    <Footer className={'bg-white'} />
                </main>

                {/* right side */}

                <div className='col-span-2 bg-pink-400 sticky top-16 h-[calc(100vh-64px)] '>
                    second div
                </div>

            </>

        )
    }

}

export default CreatePost