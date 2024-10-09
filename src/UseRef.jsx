import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [name, setName] = useState('');
    // const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(1);      // returns object for eg: {current: 0} 0 because default suplied value

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        // setRenderCount(prevState => prevState + 1);
    });
    return (
        <div className='flex flex-col justify-center h-screen items-center'>

            <input type="text" className='border w-[90%] border-black' value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>My name is <b> {name}</b></div>
            <div>I rendered <b> {renderCount.current} </b>times</div>

        </div>
    )
}

export default UseRef