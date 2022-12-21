import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import Back from '../../Images/back-button-black.svg';


function Header(){

    return(

        <header>
            <div className="container">

                <Link to="/">
                    <img src={Back} style={{width: '50px'}}/>
                </Link>

            </div>

        </header>

    )
}
export default Header