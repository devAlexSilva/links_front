import { api } from '../apiLinks/axiosClientSide';
import { axiosClient } from '../apiLinks/axiosServerSide';
import styles from '../../styles/pages/Home.module.css'
import Router from 'next/router'
import { SideBarLeft } from '../components/sideBarLeft';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Link from 'next/link';
import { parseCookies } from 'nookies';




export default function Home(props) {

    async function deleteForm(id) {
        try {
            await api.delete(`/links/delete/${id}`);
            Router.push('/home');

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.grid}>
            <div className={styles.gridHeader}>
                <Header />
            </div>
            <div className={styles.gridSideBar}>
                <SideBarLeft />
            </div>
            <div className={styles.gridMain}>
                <div className={styles.container}>
                    {
                        props.data.map(item => {
                            return (
                                <div key={item._id} className={styles.card}>
                                    <ul className={styles.ul}>
                                        <li>{item.title}</li>
                                        <li>{item.content}</li>
                                        <li className={styles.title}>{item.category}</li>
                                    </ul>
                                    <div>
                                        <button
                                            type="submit"
                                            onClick={() => { deleteForm(item._id) }}>
                                            <span> delete </span>
                                        </button>

                                        <Link href={`/cardUpdate/${item._id}`}>
                                            <button type="submit">
                                                <span> edit </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className={styles.gridFooter}>
                {/*<Footer />*/}
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const api = axiosClient(ctx);

    const { tokenCardLink } = parseCookies(ctx);

    if (!tokenCardLink) return {
        redirect: {
            destination: '/'
        }
    }

    const { 'data': dataForm } = await api.get('/links');

    return {

        props: {
            data: dataForm
        }
    }

}
