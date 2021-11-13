import styles from '../../styles/components/sideBarLeft.module.css'
import Link from 'next/link';
import { parseCookies } from 'nookies'

export function SideBarLeft() {

    const { 'cdlUser': userLoged } = parseCookies()


    return (
        <div className={styles.sidebar}>
            <div>
                <span>Usuario logado:</span>
                <h1>{userLoged}</h1>
            </div>
            
                <p>obarra lateral</p>
            
                <p>
                
                <Link href={'/cardAdd'}>
                    <button type="submit">
                        <span> add </span>
                    </button>
                </Link>
            
                </p>
                        
                <p>obarra lateral</p>

                <Link href={'/home'}>
                    <button type="submit">
                        <span> home </span>
                    </button>
                </Link>
            
        </div>
    )
}
