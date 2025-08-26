import { Routes, Route } from "react-router";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "./context/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

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
            <Route path="/painel" element={<Segury> <Dashboard /> </Segury>} />
        </Routes>
    )
}