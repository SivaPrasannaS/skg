import React, { useState } from 'react';

const useStateHook = () => {
    // const [count, setCount] = useState(0);
    // const [isShow, setShow] = useState(false)
    const [data, setData] = useState("Guest");

    // const handleEvent = () => {
    // setCount((prev) => prev + 1);
    // if (isShow === false)
    //     setShow(true)
    // else
    //     setShow(false)
    // }

    const handleChangeEvent = (event) => {
        setData(event.target.value)
    }

    return (
        <div>
            {/* {isShow ? <p>Online</p> : <p>Offline</p>} */}
            {/* <button onClick={handleEvent}>Show</button> */}
            <p>{data}</p>
            <input type="text" name="name" id="name" onChange={handleChangeEvent} />
        </div>
    )
}

export default useStateHook;