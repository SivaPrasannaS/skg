import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count value has changed');
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <span>{count}</span>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>
    )
}

export default UseEffectHook;