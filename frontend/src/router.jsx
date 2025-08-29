import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "./context/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import DetailMusic from "./pages/Detail_Music";
import ListMusic from "./pages/List_Music";
import CreateOrUpdateMusic from "./pages/CreateOrUpdateMusic";
import CreateEvent from "./pages/CreateEvent";

function Segury({ children }) {

    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

   
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate])


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
            <Route path="/musicas" element={<ListMusic />} />
            <Route path="/:action/musica" element={<CreateOrUpdateMusic />} />
            <Route path="/criar/event" element={ <Segury> <CreateEvent /> </Segury> } />
        </Routes>
    )
}