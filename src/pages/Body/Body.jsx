import {Navigate, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Detail } from "../Detail/Detail";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </>
    )
}