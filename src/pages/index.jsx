import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { api } from '../apiLinks/axiosClientSide';
import { parseCookies, setCookie } from 'nookies';
import styles from '../../styles/pages/index.module.css';
import Router from 'next/router';
import Link from 'next/link';


export default function ScreenLogin() {

  const { register, handleSubmit } = useForm();


  async function login({ email, password }) {
    const { data: { dataUser, token } } = await api.post('/login', { email, password });

    setCookie(null, 'tokenCardLink', token, {
      maxAge: 1800 // 30 minutos
    })

    setCookie(null, 'cdlUser', dataUser.name, {
      maxAge: 1800,

    })

    Router.push('/home');
  }


  const { tokenCardLink } = parseCookies();
  api.defaults.headers['authorization'] = `Bearer ${tokenCardLink}`;




  return (
    <div className={styles.body}>
      <Head>
        <title>LINK CARDS</title>
      </Head>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={handleSubmit(login)}>

          <div>
            <div className={styles.inputField}>
              <label htmlFor="email-address">
                Email address
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
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
                autoComplete="current-password"
                required
                placeholder="Password"
              />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btnLogar} type="submit">
              <span> Login </span>
            </button>
            <Link href='/addUser'>
              <button className={styles.btnLogar} type="submit">
                <span>Register</span>
              </button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}
