import { useForm } from 'react-hook-form'
import { api } from '../apiLinks/axiosClientSide';
import Router from 'next/router';
import { Header } from '../components/header';
import { SideBarLeft } from '../components/sideBarLeft';



export default function AddUser(){
    
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
        <div>
            <Header />
            <SideBarLeft />
            
            <form onSubmit={handleSubmit(saveForm)}>
                <div>

                    <div>
                        <label htmlFor="name_form">
                            name
                        </label>
                        <input
                            {...register('name')}
                            id="name_form"
                            name="name"
                            type="text"
                            required
                            placeholder="seu nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="email_form">
                            email
                        </label>
                        <textarea
                            {...register('email')}
                            id="email_form"
                            name="email"
                            required
                            type="email"
                            placeholder="insira seu email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password_form">
                            password
                        </label>
                        <input
                            {...register('password')}
                            id="password_form"
                            name="password"
                            type="password"
                            required
                            placeholder="password"
                            
                        />
                    </div>

                </div>

                <div>
                    <button type="submit">
                        <span> Registrar </span>
                    </button>
                </div>

            </form>
        </div>
    )
}
