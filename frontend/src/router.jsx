import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "./context/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";

function Segury({ children }) {

    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return children;
}


export default function Routers() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/painel" element={ <Dashboard /> } />
            <Route path="/escala/:id" element={ <Event /> } />
        </Routes>
    )
}