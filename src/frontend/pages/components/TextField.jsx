import React, { useEffect } from 'react'

function TextField({
    handleSubmitForm,
    data,
    handleInput,
    inputData,
    setInputdata

}) {

    useEffect(() => {
        // sets the comment/postContent or whatever it provides to the useState
        setInputdata(data);

    }, [])
    return (
        < div className='relative flex flex-col border border-gray-500 rounded-2xl' >


            <textarea
                required
                onInput={handleInput}
                value={inputData}
                onChange={e => setInputdata(e.target.value)}
                ref={textareaRef}
                className=' w-full min-h-[100px] focus:outline-none px-3 py-3 border-0 rounded-2xl'
                name="" id="" placeholder=''
            >
            </textarea>


            <div className=' right-3 bottom-3 flex justify-end p-2 gap-2'>
                <button
                    onClick={() => { setShowTextField(false); }}
                    className='bg-custom-gray-orange px-3 py-2 rounded-full font-semibold hover:bg-custom-gray-dark'
                >
                    Cancel
                </button>

                <button
                    onClick={handleSubmitForm}
                    disabled={commenLoading || !inputdata}
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full font-semibold ${commenLoading ? 'bg-indigo-700' : ''}`}
                >
                    Submit
                </button>
            </div>
        </div >
    )
}

export default TextField