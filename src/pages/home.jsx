import { api } from '../apiLinks/axiosClientSide';
import { axiosClient } from '../apiLinks/axiosServerSide';
import styles from '../../styles/pages/Home.module.css'
import Router from 'next/router'
import { SideBarLeft } from '../components/sideBarLeft';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Link from 'next/link';



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
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <SideBarLeft />
                <div className={styles.centerArea}>
                    <div className={styles.grid}>
                        {
                            props.data.map(item => {
                                return (
                                    <div key={item._id} className={styles.card}>

                                        <li>{item.title}</li>
                                        <li>{item.content}</li>
                                        <li className={styles.title}>{item.category}</li>

                                        <div>
                                            <button
                                                type="submit"
                                                onClick={() => { deleteForm(item._id) }}>
                                                <span> delete </span>
                                            </button>
                                        </div>
                                        <div>
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
            </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const api = axiosClient(ctx);

    const { 'data': dataForm } = await api.get('/links');

    return {

        props: {
            data: dataForm
        }
    }

}
