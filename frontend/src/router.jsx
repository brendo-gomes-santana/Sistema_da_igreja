import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext } from "./context/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import DetailMusic from "./pages/Detail_Music";
import ListMusic from "./pages/List_Music";
import CreateMusic from "./pages/CreateMusic";
import CreateEvent from "./pages/CreateEvent";
import ListLevite from "./pages/List_Levite";
import CreateNewLevite from "./pages/CreateNewLevite";
import UpdateMusic from "./pages/Update_Music";
import UpdateEvent from "./pages/Update_Event";

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
            <Route path="/criar/musica" element={<CreateMusic />} />
            <Route path="/criar/event" element={ <Segury> <CreateEvent /> </Segury> } />
            <Route path="/levitas" element={ <Segury> <ListLevite /> </Segury> } />
            <Route path="/criar/levita" element={ <Segury> <CreateNewLevite /> </Segury> } />
            <Route path="/atualizar/musica/:id" element={ <Segury> <UpdateMusic /> </Segury> } />
            <Route path="/atualizar/evento/:id" element={ <Segury> <UpdateEvent /> </Segury> } />
        </Routes>
    )
}