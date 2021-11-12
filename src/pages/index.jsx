import Head from 'next/head'
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/authContext';
import { api } from '../apiLinks/axiosClientSide';
import { parseCookies } from 'nookies';
import styles from '../../styles/pages/index.module.css';


export default function ScreenLogin() {
  const { register, handleSubmit } = useForm();
  const { auth } = useContext(AuthContext)


  async function login({ email, password }) {

    await auth({ email, password });

    const { tokenCardLink } = parseCookies();
    api.defaults.headers['authorization'] = `Bearer ${tokenCardLink}`;

  }

  return (
    <div className={styles.body}>
      <Head>
        <title>cardLink</title>
      </Head>
      <section className={styles.section}>
        <form className={styles.form} onSubmit={handleSubmit(login)}>
          <input type="hidden" name="remember" defaultValue="true" />
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
            <button className={styles.btnLogar} type="submit">
              <span> Login </span>
            </button>
        </form>
      </section>
    </div>
  )
}
