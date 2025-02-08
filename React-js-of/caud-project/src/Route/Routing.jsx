// import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
// import Contacts from '../pages/Contacts';
import Form from '../pages/Form';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoutes from './PrivateRoutes';

export default function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>} />

                <Route path='/about' element={<PrivateRoutes><About /></PrivateRoutes>} />


                <Route path='/form' element={<PrivateRoutes><Form /></PrivateRoutes>} />


                <Route path='/login' element={<Login />} />


                <Route path='/Signup' element={<Signup />} />

            </Routes>
        </div>
    )
}
