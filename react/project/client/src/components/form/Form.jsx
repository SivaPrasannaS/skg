import React, { useState } from 'react';
import '../../assets/css/Form.css';

const Form = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='form__container'>
            <form className='form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required minLength={4} maxLength={15} onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" required minLength={8} maxLength={15} onChange={handleChangeEvent} />
                </div>
                <button type="submit">Register</button>
                <hr />
            </form>
        </div>
    )
}

export default Form;