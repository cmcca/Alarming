import React from 'react';
import { Script } from 'vm';

function Signup(){
    return(
        <div class = "signUpPage">
          <br/>
           <div class = "row">

             <div class = "col-12 flex">
             <h1>Create Login: </h1>
             </div>

            </div>

            <div class = "row">
            
              <div class = "col-12 flex">
              <h2>Username: </h2>
              <br/>
              <input type = "text" id = "UsernameSign"></input>
              </div>
            
            </div>

            <div class = "row">
            
              <div class = "col-12 flex">
              <h2>Password: </h2>
              <br/>
              <input type = "password" id = "PasswordSign"></input>
              </div>
            
            </div>

            <div class = "row flex">
            
              <div class = "col-12">
              <button type = "button" class = "block" id = "SubmitSign">Submit</button>
              <button type = "button" class= "block" id = "Login_Page">Login</button>
              </div>
            
            </div>

            <div class = "row flex">
            <h1 id = "signcomp">Sign up complete!</h1>
            </div>

         </div>
    )
   
}

export default Signup;
