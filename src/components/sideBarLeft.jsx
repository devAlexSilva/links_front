import styles from '../../styles/components/sideBarLeft.module.css'
import Link from 'next/link';
import { parseCookies } from 'nookies'

export function SideBarLeft() {

    const { 'cdlUser': userLoged } = parseCookies()


    return (// só estou conseguindo usar quando faço login
        <div className={styles.sidebar}>
            <div>
                <span>Usuario logado:</span>
                <h1>{userLoged}</h1>
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
