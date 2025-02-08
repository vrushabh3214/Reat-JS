// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import Form from '../Page/Form'
import Login from '../Page/Login'
import Signup from '../Page/Signup'
import { AuthProvider } from '../Contextapi/AuthContext'
// import PrivateRoute from './PrivateRoutes'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={ <AuthProvider><Form /></AuthProvider> } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}
