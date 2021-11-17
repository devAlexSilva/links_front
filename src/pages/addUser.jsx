import { useForm } from 'react-hook-form'
import { api } from '../apiLinks/axiosClientSide';
import Router from 'next/router';
import styles from '../../styles/pages/addUser.module.css'
import Head from 'next/head';
import Link from 'next/link';



export default function AddUser() {

    const { register, handleSubmit } = useForm();



    async function saveForm(data) {
        /**
         * data: { name, email, password }
         */
        try {

            await api.post('/user/create', data).then(() => {
                Router.push('/');
            })

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className={styles.body}>
            <Head>
                <title>LINK CARDS</title>
            </Head>
            <section className={styles.section}>
                <form className={styles.form} onSubmit={handleSubmit(saveForm)}>

                    <div>
                        <div className={styles.inputField}>
                            <label htmlFor="name">
                                Name
              </label>
                            <input
                                {...register('name')}
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="nome de usuario"
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="email-address">
                                Email address
              </label>
                            <input
                                {...register('email')}
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="password">
                                Password
              </label>
                            <input
                                {...register('password')}
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="xxxxxx"
                            />
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.btnRegister} type="submit">
                            <span>Register</span>
                        </button>
                        <Link href='/'>
                            <button className={styles.btnRegister}>
                                <span>Return</span>
                            </button>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    )
}
