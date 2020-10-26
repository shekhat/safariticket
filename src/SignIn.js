import React from 'react';
import "./styles.css"

class SignIn extends React.Component{
    render(){
      return(
          <div class="body">

<div class="sides">

            <div class="instruct">
        <ul>
            <br/><br/><br/>
            <p>Enter your User-Name</p>
            <br/><br/>
            <p>Enter your Password</p>
            <br/><br/>
            </ul>
                </div>
                 <form className="sign-form">
                     <h1>Sign In</h1>
                     <input type="text" placeholder="User name*"/>
                      <br/><br/>
           
                     <input   type="text" placeholder="Password*"/>
                      <br/><br/>

                      <input class="form" type="Submit" value="Submit"/>
                       <br/><br/>
                       <br/>
                       <a class="forgot" href="forgot.html">Forgot password</a>
                 </form>
            </div>
            <br/><br/>
            </div>
            

         );
     }
 }
 export default SignIn;