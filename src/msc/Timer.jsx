import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count); // Initialize the ref with the current count

    const incrementCount = () => {
        setCount((prev) => prev + 1);
        countRef.current = count + 1; // Update the ref's value
    };

    const alertCurrentCount = () => {
        alert(`Current count: ${countRef.current}`); // Show the latest value stored in the ref
    };



    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       console.log(countRef.current); // Logs the latest value of count without re-rendering the component
    //     }, 1000);
      
    //     return () => clearInterval(intervalId); // Cleanup interval
    //   }, []);


    return (
        <div className="flex flex-col items-center">
            <h1>Count: {countRef.current}</h1>
            <button onClick={incrementCount} className="px-4 py-2 bg-blue-500 text-white rounded mb-4">
                Increment Count
            </button>
            <button onClick={alertCurrentCount} className="px-4 py-2 bg-green-500 text-white rounded">
                Alert Current Count
            </button>
        </div>
    );
};

export default Timer;
