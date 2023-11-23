import React, { useContext, useState } from 'react';
import '../../assets/css/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/UserApi';
import { UserContext } from '../../context/UserProvider';

const LoginForm = () => {

    const { loggedIn, loggedOut } = useContext(UserContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await loginUser(formData);
        if (success) {
            loggedIn();
            navigate('/home');
        } else {
            loggedOut();
        }
    }

    return (
        <div className='form__container'>
            <form className='register__form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required minLength={8} maxLength={15} onChange={handleChangeEvent} />
                </div>
                <button className='submit__btn' type="submit">Login</button>
                <p>New user?<span><Link style={{ textDecoration: 'none', marginLeft: '3px' }} to={`/register`}>Register here</Link></span></p>
            </form>
        </div>
    )
}

export default LoginForm;
