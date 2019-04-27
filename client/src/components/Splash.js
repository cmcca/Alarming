import React from 'react';
import { Link } from "react-router-dom";
import alarming from './alarming.png';



function Splash(){
    return(
        <div>
            <img src={alarming} alt="Alarming" id= "logo" />
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <Link
                to="/login"
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                >
                Boom
                </Link>
                </li>
            </ul>
        </div>  

    )
}

export default Splash;
