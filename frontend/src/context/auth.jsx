import { createContext, useState, useEffect } from "react";
import api from '../api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    

    const [loadingAuth, setLoadingAuth] = useState(true);
    const [token, setToken]= useState('')

    useEffect(() => {
        (() => {

            const tokenLocal = localStorage.getItem('token');

            if (tokenLocal) {
                api.defaults.headers.common['Authorization'] = tokenLocal;
                setToken(tokenLocal)
            } else {
                setToken('')
            }

            setLoadingAuth(false)

        })()
    }, [])

    if (loadingAuth) { return <h1>Carregando...</h1> }

    return (
        <AuthContext.Provider value={{ token }}>

            {children}

        </AuthContext.Provider>
    )

}