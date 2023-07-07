import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Movie } from "../pages/Movie";
import { PublicRoutes } from "../PublicRoutes";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
        </Routes>
    )
}

