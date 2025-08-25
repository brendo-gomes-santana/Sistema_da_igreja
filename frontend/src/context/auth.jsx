import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from '../api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    
    const navigate = useNavigate()
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        (() => {

            const token = localStorage.getItem('token');

            if (token) {
                api.defaults.headers.common['Authorization'] = token;
            } else {
                navigate('/');
            }

            setLoadingAuth(false)

        })()
    }, [])

    if (loadingAuth) { return <h1>Carregando...</h1> }

    return (
        <AuthContext.Provider>

            {children}

        </AuthContext.Provider>
    )

}