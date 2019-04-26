import React from 'react';
import { Link } from "react-router-dom";
import alarming from './alarming.png';


function Splash(){
    return(
        <div>
        <img src={alarming} alt="Alarming" id= "logo" />
        <ul id="links">
        <li>
          <Link
            to="/alarm"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            Alarm
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
          >
            Settings
          </Link>
        </li>
        </ul>
        </div>
    )
}

export default Splash;
