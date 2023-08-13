import { Navigate, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Detail } from "../Detail/Detail";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { Admin } from "../Admin/Admin";
import { Favorites } from "../../common/Favorites/Favorites";
import { Login } from "../Login/Login";
import { Fav } from "../Fav/Fav";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </>
  );
};
