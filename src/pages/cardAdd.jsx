import { useForm } from 'react-hook-form'
import { api } from '../apiLinks/axiosClientSide';
import Router from 'next/router';
import { Header } from '../components/header';
import { SideBarLeft } from '../components/sideBarLeft';
import { parseCookies } from 'nookies';
import styles from '../../styles/pages/cardAdd.module.css'


export default function CardAdd() {

    const { register, handleSubmit } = useForm();



    async function saveForm(data) {
        /**
         * data: { title, content, category }
         */
        try {

            await api.post('/links/create', data).then(() => {
                Router.push('/home');
            })

        } catch (error) {
            console.log(error);
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

                    <form onSubmit={handleSubmit(saveForm)}>
                        <ul className={styles.card}>

                            <li>
                                <label htmlFor="title_form">
                                    titulo
                        </label>
                                <input
                                    {...register('title')}
                                    id="title_form"
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="titulo do formulário"
                                />
                            </li>

                            <li>
                                <label htmlFor="content_form">
                                    links
                        </label>
                                <textarea
                                    {...register('content')}
                                    id="content_form"
                                    name="content"
                                    required
                                    placeholder="campo para salvar os links"
                                />
                            </li>

                            <li>
                                <label htmlFor="category_form">
                                    categoria
                        </label>
                                <input
                                    {...register('category')}
                                    id="category_form"
                                    name="category"
                                    type="text"
                                    required
                                    placeholder="category"
                                />
                            </li>

                        </ul>

                        <div className={styles.containerBtn}>
                            <button type="submit">
                                <span> Salvar </span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <div className={styles.gridFooter}>
                {/*<Footer />*/}
            </div>
        </div>
    )
}


export async function getServerSideProps(ctx) {

    const { tokenCardLink } = parseCookies(ctx);

    if (!tokenCardLink) return {
        redirect: {
            destination: '/'
        }
    }

    return {
        props: {}
    }

}
