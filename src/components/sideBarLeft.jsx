import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import styles from '../../styles/components/sideBarLeft.module.css'
import Link from 'next/link';


export function SideBarLeft() {

    const { user } = useContext(AuthContext); // quando atualiza a pagina o user fica undefined
    return (// só estou conseguindo usar quando faço login
        <div className={styles.sidebar}>
            <div>
                <h1>{console.log(user)}</h1>
            </div>
            <div>
                <p>obarra lateral</p>
            </div>
            <div>
                <p>opções</p>
            </div>
            <div>
                <p>obarra lateral</p>
            </div>

            <div>
                <Link href={'/cardAdd'}>
                    <button type="submit">
                        <span> + </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
