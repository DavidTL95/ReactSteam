import {Navigate, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Detail } from "../Detail/Detail";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail" element={<Detail />}/>
            </Routes>
        </>
    )
}