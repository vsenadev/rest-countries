import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Detail darkMode setDarkMode={null}/>} path="/country/:common"/>
            </Routes>
        </BrowserRouter>
    )
}