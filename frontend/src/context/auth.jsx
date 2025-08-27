import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from '../api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {


    const [loadingAuth, setLoadingAuth] = useState(true);
    const [token, setToken] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        (() => {
            const tokenLocal = localStorage.getItem('token');

            if (tokenLocal) {
                api.defaults.headers.common['Authorization'] = `bearer ${tokenLocal}`;
                setToken(tokenLocal)
            } else {
                setToken('')
            }

            setLoadingAuth(false)

        })()
    }, [])

    async function HandleLogin(data) {
        try {
            const response = await api.post('/login', data);
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token)
            navigate('/')
        } catch (err) {
            alert(err.response.data.message);
        }
    }


    async function handleLogOut() {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    }

    if (loadingAuth) { return <h1>Carregando...</h1> }

    return (
        <AuthContext.Provider value={{ token, handleLogOut, HandleLogin }}>

            {children}

        </AuthContext.Provider>
    )

}