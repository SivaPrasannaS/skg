import React from 'react';

const Form = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <form method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required minLength={4} maxLength={15} />
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required minLength={8} maxLength={15} />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Form;