import React, { useState } from 'react';
import '../../assets/css/Form.css'

const Form = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChangeEvent = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChangeEvent = (event) => {
        setEmail(event.target.value);
    }

    const handlePwdChangeEvent = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, email, password);
    }

    return (
        <>
            <form className='form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required minLength={4} maxLength={15} onChange={handleUserChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleEmailChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required minLength={8} maxLength={15} onChange={handlePwdChangeEvent} />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Form;