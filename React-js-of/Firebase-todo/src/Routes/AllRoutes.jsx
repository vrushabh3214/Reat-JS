// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import LogIn from "../Page/LogIn";
import SignUp from "../Page/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes() {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
    </div>
  );
}
