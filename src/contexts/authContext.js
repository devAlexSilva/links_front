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

        setCookie(null, 'cdlUser', dataUser.name, {
            maxAge: 1800,

        })

        setUser(dataUser);

        Router.push('/home');
    }

    async function cancelCookie() {
        destroyCookie(null, 'tokenCardLink');
        destroyCookie(null, 'cdlUser');

        Router.push('/');
    }


    return (
        <AuthContext.Provider value={{ isAuthenticate, auth, cancelCookie }}>
            {children}
        </AuthContext.Provider>
    )
}