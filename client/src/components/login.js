import React from 'react';

function Login(){
    return(
        <div className = "loginPage">
          <br/>
           <div className = "row">

             <div className = "col-12 flex">
             <h1>Enter Login: </h1>
             </div>

            </div>

            <div className = "row">
            
              <div className = "col-12 flex">
              <h2>Username: </h2>
              <br/>
              <input type = "text" id = "Username"></input>
              </div>
            
            </div>

            <div className = "row">
            
              <div className = "col-12 flex">
              <h2>Password: </h2>
              <br/>
              <input type = "text" id = "Password"></input>
              </div>
            
            </div>

            <div className = "row flex">
            
              <div className = "col-12">
              <button type = "button" class = "block" id = "Submit">Login</button>
              </div>
            
            </div>

         </div>

    )
}

export default Login;