import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import HeaderMain from '../../Components/HeaderMain/HeaderMain';
import More from '../../Images/more.svg';
import './Inicial.css';



function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://kaiqueapi.onrender.com/cardapios")
            .then((response) => {
                setPosts(response.data)
            })
            .catch(() => {
                console.log("Deu errado!")
            })
    })


    // Função para deletar uma postagem!
    function deletePost(id) {
        axios.delete(`https://kaiqueapi.onrender.com/cardapios/${id}`)

        setPosts(posts.filter(post => post.id !== id))
    }


    return (
        <div>
            <HeaderMain />

            <main>
                <div className="cards" >


                    {posts.map((post, key) => {
                        return (
                            <div className="card" key={key}>
                                

                                <header className="tresPontosHeader">  
                                    <img className="tresPontos" src={More}></img>
                                </header>

                                <div className="tituloAndImg">
                                    <h2>{post.title}</h2> 
                                    {/* <img className="img-Inicial" src={`Images/${post.imagem}`} /> */}
                                    <img className="img-Inicial" src={post.imagem}/>
                                </div>


                                <div className="line"></div>

                                <p>R${post.preço}</p>

                                <div className="btns">
                                    <div className="btn-edit">
                                        <Link to={{ pathname: `/edit/${post.id}` }}>
                                            <button>Editar</button>
                                        </Link>
                                    </div>

                                    <div className="btn-readmore">
                                        <Link to={{ pathname: `/lermais/${post.id}` }}>
                                            <button>Ler mais</button>
                                        </Link>
                                    </div>

                                    <div className="btn-delete">
                                        <button onClick={() => deletePost(post.id)}>Deletar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </main>
        </div>
    )
}
export default Feed