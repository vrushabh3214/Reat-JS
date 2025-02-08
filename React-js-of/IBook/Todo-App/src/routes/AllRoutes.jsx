
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Login from "../page/Login";
import Signup from "../page/Signup";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}
