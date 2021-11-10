import axios from "axios";
import { createContext, useState } from "react";
import { destroyCookie, setCookie } from 'nookies'
import Router from 'next/router'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState();


    const authenticate = !!user;

    async function auth({ email, password }) {
        const { data: { dataUser, token } } = await axios({
            method: 'POST',
            url: 'https://api-card-task.herokuapp.com/login',
            data: {
                email: email,
                password: password
            }

        });

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
        <AuthContext.Provider value={{ authenticate, auth, cancelCookie, user }}>
            {children}
        </AuthContext.Provider>
    )
}