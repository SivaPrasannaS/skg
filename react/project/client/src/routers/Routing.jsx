import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterForm from '../components/form/RegisterForm';
import LoginForm from '../components/form/LoginForm';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

const Routing = () => {
    return (
        <Routes>
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path="/home" element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
        </Routes>
    )
}

export default Routing;