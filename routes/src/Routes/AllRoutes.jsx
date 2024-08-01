// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Form from '../pages/Form'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<Form />} />
            </Routes>
        </div>
    )
}
