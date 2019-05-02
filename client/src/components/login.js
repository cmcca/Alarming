import React from 'react';

function Login(){
    return(
        <div class = "loginPage">
          <br/>
           <div class = "row">

             <div class = "col-12 flex">
             <h1>Enter Login: </h1>
             </div>

            </div>

            <div class = "row">
            
              <div class = "col-12 flex">
              <h2>Username: </h2>
              <br/>
              <input type = "text" id = "Username"></input>
              </div>
            
            </div>

            <div class = "row">
            
              <div class = "col-12 flex">
              <h2>Password: </h2>
              <br/>
              <input type = "text" id = "Password"></input>
              </div>
            
            </div>

            <div class = "row flex">
            
              <div class = "col-12">
              <button type = "button" class = "block" id = "Submit">Login</button>
              </div>
            
            </div>

         </div>

    )
}

export default Login;
