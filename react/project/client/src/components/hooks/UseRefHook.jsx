import React, { useRef } from 'react';

const UseRefHook = () => {

    const nameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input_fields">
                <input type="text" name="name" id="name" ref={nameRef} />
            </div>
            <div className="input_fields">
                <input type="password" name="password" id="password" ref={passwordRef} />
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default UseRefHook;