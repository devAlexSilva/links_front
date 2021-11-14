import { createContext } from "react";
import { destroyCookie } from 'nookies'
import Router from 'next/router'




export const AuthContext = createContext({})

export function AuthProvider({ children }) {
   
    async function cancelCookie() {
        destroyCookie(null, 'tokenCardLink');
        destroyCookie(null, 'cdlUser');

        Router.push('/');
    }

    return (
        <AuthContext.Provider value={{ cancelCookie }}>
            {children}
        </AuthContext.Provider>
    )
}
