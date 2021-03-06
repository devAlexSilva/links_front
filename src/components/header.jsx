import Head from 'next/head'
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import  styles  from '../../styles/components/header.module.css'

export function Header() {

const { cancelCookie } = useContext(AuthContext);

    return (
        <div className={styles.container}>
            <Head>
                <title>LINK CARDS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button
                    type="submit"
                    onClick={cancelCookie}>
                    <span> logout </span>
                </button>
            </div>

            <div  className={styles.img}>
                <img className={styles.avatar} src="https://github.com/devAlexSilva.png" alt="alex dev" />
            </div>
        </div>
    )
}