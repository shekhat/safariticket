import React, {Component} from 'react';

//Importing components
import Header from './Header';
import Footer from './Footer';


class Home extends Component{
render(){
    return(
        <div>
        <Header/>
        <p>PindiPlus is a programming company established in 2015.It is  an online platform designed to help it's users or upcoming programmers with a  one on one coding sessions.PindiPlus offers both theoretical and practical experiences.PindiPlus is a non-govermental organisation , with PindiPlus you will be able to earn a proffessional certificate after the completion of the course.But also, if there's any job available then PindiPlus will hook you up</p>
        <Footer/>
        </div>
        );     
}
}
export default Home;
