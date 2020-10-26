import React from 'react';
import "./styles.css"

class Contact extends React.Component{
    render(){
      return(
          <div class="body">
    <div>
<h1>CONTACT US</h1><br/>
       <section class="contact">Please let us know if you have a question,want to leave a comment,
or would like further information about Safari Ticket.<br/><br/>

<section class="contacts"><br/>

<br/>
    <address><b>phone:+255-7730773</b></address><br/>
    <address><b>email:info@safariTicket.com</b></address>
</section> <br/>
</section>
<br/><br/>
</div>

<form className="sign-form">

<input type="text" placeholder="Your name*"/>
<br/><br/>

<input   type="text" placeholder="Title"/>
<br/><br/>

<input type="text" placeholder="Company/Position"/>
<br/><br/>

<input type="text" placeholder="E-mail*"/>
<br/><br/>
<br/>

<input  type="text" placeholder="Subject*"/>
<br/><br/>

<input  type="text" placeholder="Your Message*"/>
<br/><br/>

<input class="form" type="Submit" value="Submit"/>
<br/><br/>

</form>       
<br/><br/>
       </div>
      );
    }
}
export default Contact;