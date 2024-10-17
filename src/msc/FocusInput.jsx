import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null); // Initialize the reference

    const focusInput = () => {
        inputRef.current.focus(); // Access the DOM element and call its focus method
    };

    return (
        <div className="flex flex-col items-center">
            <input ref={inputRef} type="text" className="border p-2 mb-4" placeholder="Focus me" />
            <button onClick={focusInput} className="px-4 py-2 bg-blue-500 text-white rounded">
                Focus the Input
            </button>
        </div>
    );
};

export default FocusInput;