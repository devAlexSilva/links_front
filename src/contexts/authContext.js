import { createContext, useEffect } from "react";
import { destroyCookie } from 'nookies'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress';




export const AuthContext = createContext({})

export function AuthProvider({ children }) {

    const router = useRouter()

    useEffect(() => {
        const handleStart = () => {
            NProgress.start()
        }
        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])


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
