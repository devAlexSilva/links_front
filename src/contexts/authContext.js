import axios from "axios";
import { createContext, useState } from "react";
import { destroyCookie, setCookie } from 'nookies'
import Router from 'next/router'
import { api } from "../apiLinks/axiosClientSide";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState();


    const isAuthenticate = !!user;

    async function auth({ email, password }) {
        const { data: { dataUser, token } } = await api.post('/login', { email, password });
        
        setCookie(null, 'tokenCardLink', token, {
            maxAge: 1800 // 30 minutos
        })

        setUser(dataUser);

        Router.push('/home');
    }

    async function cancelCookie(){
        destroyCookie(null, 'tokenCardLink');

        Router.push('/');
    }


    return (
        <AuthContext.Provider value={{ isAuthenticate, auth, cancelCookie, user }}>
            {children}
        </AuthContext.Provider>
    )
}