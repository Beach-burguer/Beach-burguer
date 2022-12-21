import React from "react";
import { Link } from 'react-router-dom';
import './HeaderMain.css';

function HeaderMain() {

    return (

        <header>
            <div className="container">

                <a className="linkLogo" href="/">
                    <div className="logo">
                        <h1>K<small>&</small>Burg</h1>
                    </div>
                </a>

                <div className="btn-newPost">
                    <Link to="/post">
                        <button>Adicionar ao cardapio</button>
                    </Link>
                </div>
            </div>

        </header>

    )
}
export default HeaderMain