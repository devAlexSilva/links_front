import { axiosClient } from "../../apiLinks/axiosServerSide"
import { useForm } from 'react-hook-form'
import { api } from "../../apiLinks/axiosClientSide";
import  Router from "next/router";


export default function CardUpdate(props) {

    const { title, content, category, '_id': id } = props.sendProps[0];

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: `${title}`,
            content: `${content}`,
            category: `${category}`
        }
    });


    async function updateForm(data) {
       const res = await api.patch(`/links/update/${id}`, data)
console.log(res.data)
        Router.push('/home');
    }

    return (
        <div>


            <form onSubmit={handleSubmit(updateForm)}>
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
                            placeholder='exatas'
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
                            placeholder='https://calculo.com'
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
                            placeholder='estudos'
                        />
                    </div>

                </div>

                <div>
                    <button type="submit">
                        <span> Atualizar </span>
                    </button>
                </div>

            </form>




            {/*
                props.data.map((itens)=>{
                    return (
                        <ul>
                            <li>{itens.title}</li>
                            <li>{itens.content}</li>
                            <li>{itens.category}</li>
                        </ul>

                    )
                })
            */}
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { id } = ctx.params;

    const apiServer = axiosClient(ctx)
    const dataForm = await apiServer.get(`/links/${id}`);

    return ({
        props: {
            sendProps: dataForm.data
        }
    })
}

















