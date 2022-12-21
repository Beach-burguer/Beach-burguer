import React from "react";
import Header from "../../Components/Header/Header";
import { useForm } from 'react-hook-form';
import './AddConteudo.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import axios from 'axios';


const validacaoForms = yup.object().shape({
    title: yup.string().required("O nome é obrigatório!").max(40, "O nome precisa ter menos de 40 caracteres!"),

    imagem: yup.string().required("A imagem é obrigatória!"),

    descrição: yup.string().required("O descrição é obrigatória!"),
    
    preço: yup.string().required("O preço é obrigatório!").min(4, "O preço precisa ter menos de 4 caracteres!")
})


function Post(){

    const { register, handleSubmit, formState: { errors }} = useForm({
    })

    const addPost = data => ("https://kaiqueapi.onrender.com/cardapios", data)
    .then(() => {
        console.log("Deu certo!")
  axios.post  })
    .catch(() => {
        console.log("Deu errado!")
    })

    return(
        <div>
            <Header />

            <main>
                <div className="card-post">
                    <h1>Adicionar produto</h1>
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
export default Post