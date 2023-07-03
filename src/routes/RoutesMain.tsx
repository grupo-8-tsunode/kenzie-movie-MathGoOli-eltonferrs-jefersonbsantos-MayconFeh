import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Movie } from "../pages/Movie"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/movie" element={<Movie/>}/>
        </Routes>
    )
}