import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/alarm"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            Alarm
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/settings"
            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
          >
            Settings
          </Link>
        </li>
      </ul>
    )
}

export default Nav;