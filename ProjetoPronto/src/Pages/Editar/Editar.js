import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

import { useParams } from "react-router-dom";



const validacaoForms = yup.object().shape({
    title: yup.string().required("O nome é obrigatório!").max(40, "O nome precisa ter menos de 40 caracteres!"),

    imagem: yup.string().required("A imagem é obrigatório!"),

    descrição: yup.string().required("O descrição é obrigatória!"),
    
    preço: yup.string().required("O preço é obrigatório!").min(4, "O preço precisa ter menos de 4 caracteres!")
})


function Edit(){

    const { id } = useParams()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validacaoForms)
    })

    useEffect(() => {
        axios.get(`https://kaiqueapi.onrender.com/cardapios/${id}`)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])


    const addPost = x => axios.put(`https://kaiqueapi.onrender.com/cardapios/${id}`, x)
    .then(() => {
        console.log("Deu certo!")
    })
    .catch(() => {
        console.log("Deu errado!")
    })

    return(
        <div>
            <Header />

            <main>
                <div className="card-post">
                    <h1>Editar produto</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Nome do produto</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>

                                <label>Link da Imagem</label>
                                <input type="text" name="imagem" {...register("imagem")} />
                                <p className="error-message">{errors.imagem?.message}</p>

                                <label>Descrição do produto</label>
                                <textarea type="text" name="descrição" {...register("descrição")}></textarea>
                                <p className="error-message">{errors.descrição?.message}</p>

                                <label>Preço</label>
                                <input type="text" name="preço" {...register("preço")}/>
                                <p className="error-message">{errors.preço?.message}</p>

                                <div className="btn-post">
                                    <button type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </main>
        </div>
    )
}
export default Edit