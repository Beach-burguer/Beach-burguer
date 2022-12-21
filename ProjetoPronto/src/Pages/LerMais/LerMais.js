import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";



function Lermais() {

    const { id } = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://kaiqueapi.onrender.com/cardapios/${id}`)
            .then((response) => {
                setPosts(response.data)
            })
            .catch(() => {
                console.log("Deu errado!")
            })
    })

    return (
        <div>
            <Header />
            <main>

                <div className="cards" >

                    <div className="card">

                        <heade>
                            <h2>{posts.title}</h2>
                        </heade>
                        <div className="line"></div>
                        <p>{posts.descrição}</p>

                    </div>
                </div>
            </main>
        </div>
    )
}
export default Lermais