import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./context/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import DetailMusic from "./pages/Detail_Music";
import ListMusic from "./pages/List_Music";
import CreateOrUpdateMusic from "./pages/CreateOrUpdateMusic";
import CreateOrUpdateEvent from "./pages/CreateOrUpdateEvent";

function Segury({ children }) {

    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    if (!token) {
        navigate("/login");
    }

    if (!token) {
        return null;
    }

    return children;
}


export default function Routers() {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="escala/:id" element={<Event />} />
            <Route path="/musica/:id" element={<DetailMusic />} />
            <Route path="/musicas" element={ <ListMusic/> } />
            <Route path="/:action/musica" element={ <CreateOrUpdateMusic/> } />
            <Route path="/:action/event" element={ <CreateOrUpdateEvent/> } />
        </Routes>
    )
}