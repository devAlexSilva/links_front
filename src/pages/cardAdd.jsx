import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { api } from '../apiLinks/axiosClientSide';
import Router from 'next/router';



export default function CardAdd(){
    
    const { register, handleSubmit } = useForm();



    function saveForm(data) {
/**
 * data: { title, content, category }
 */
        try {

            api.post('/links/create', data).then(() => {
                Router.push('/home');
            })

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <Head>
                <title>LIA</title>
            </Head>

            <form onSubmit={handleSubmit(saveForm)}>
                <div>

                    <div>
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
                    </div>

                    <div>
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
                    </div>

                    <div>
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
                    </div>

                </div>

                <div>
                    <button type="submit">
                        <span> Salvar </span>
                    </button>
                </div>

            </form>
        </div>
    )
}

