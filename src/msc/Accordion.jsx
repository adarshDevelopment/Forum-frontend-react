import React, { useState } from 'react'

function Accordion() {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className='h-screen  bg-gradient-to-t from-indigo-300 to-neutral-300'>

            <div className='p-5'>
                <div className='bg-white p-5 rounded-lg flex flex-col'>
                    {/* parent elements  */}
                    <button className='flex justify-between w-full text-2xl items-center'
                        onClick={() => setAccordionOpen(prevState => !prevState)}
                    >
                        <span>Title text</span>
                        <span className=''>
                            {accordionOpen ? '-' : '+'}
                        </span>
                    </button>
                    {/* sub elemetns  */}

                    {
                        accordionOpen
                            ? <div className='transition-all duration-150'>
                                <div className=' '>
                                    This is the answer
                                </div>
                                <div>
                                    Second answer
                                </div>
                            </div>
                            : <></>
                    }


                </div>
            </div>

        </div>
    )
}

export default Accordion