import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return (
      
      <nav id ="navWrap">
      <button type="button" className="btn-block">
            <Link
            to="/alarm"
            className={window.location.pathname === "/alarm" ? "nav-link active" : "nav-link"}
          >
            alarm
          </Link>
      </button>
      <button type="button" className="btn-block">
                <Link
            to="/settings"
            className={window.location.pathname === "/settings" ? "nav-link active" : "nav-link"}
          >
            settings
          </Link>
      </button>
      </nav>
      
    )
}

export default Nav;