import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from '../form/Form';
import EnchanceProductList from '../hoc/EnchanceProductList';

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<RegisterForm />} />
            <Route path='/product' element={<EnchanceProductList />} />
        </Routes>
    )
}

export default Routing;