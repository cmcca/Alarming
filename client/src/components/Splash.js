import React from 'react';
import { Link } from "react-router-dom";
import logo from './alarming.svg'



function Splash(){
    return(
        <div className="container">
            <img src={logo} alt="Alarming" id="logo" className="animated infinite shake" />

                <div className="loginButton">
                <Link
                to="/login"
                className={window.location.pathname === "/login" ? "loginButton-active" : "loginButton"}
                >
                Boom
                </Link>
                </div>

        </div>  

    )
}

export default Splash;
