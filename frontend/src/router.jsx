import { Routes, Route } from "react-router";

import Login from "./pages/Login";

export default function Routers() {
    return (
            <Routes>
                <Route index element={<Login />} />
            </Routes>
    )
}