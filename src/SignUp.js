import React from 'react';
import "./styles.css"

class SignUp extends React.Component{
    render(){
      return(
          <div class="body">
       <div class="sides">
         <div class="instruct">
        <ul>
          <br/><br/><br/>
            <p>Enter your Full-Name</p>
            <br/><br/>
            <p>Enter your User-Name</p>
            <br/><br/>
            <p>Enter your Email Address</p>
            <br/><br/>
            <p>Enter your Password</p>
            <br/><br/>
            <p>Reapt your Password</p>

        </ul>
       
         </div>
                <form className="sign-form">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Your name*"/>
                <br/><br/>

                <input type="text" placeholder="User name*"/>
                <br/><br/>

                <input type="text" placeholder="E-mail*"/>
                <br/><br/>

                <input type="text" placeholder="Password*"/>
                <br/><br/> 

                <input   type="text" placeholder="Re-Password*"/>
                <br/><br/>

                <input class="form" type="Submit" value="Submit"/>
                <br/> <br/>
                     <br/>
                 </form> 
       </div>
       <br/><br/>
                </div>
      );
    }
}
export default SignUp;
                