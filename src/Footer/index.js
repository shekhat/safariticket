import React from 'react';

import ReactDom from 'react-dom';

import App from './App';

render(){
    return(

        <a href="home.js">Home</a>
        <a href="about.js">About us</a>
        <a href="contact.js">Contact us</a>
        <a href="sign in.js">Sign in</a>
        <a href="log in.js">Log in</a>
        <a href="terms.js">Terms of service</a>

        <address>
            Kinondoni Vijana
            Mafere Street, Block 22
            Dar Es Salaam, Tanzania
        </address>

        <img src={required( Google Store)} alt="Google"/>
         <img src={required(App Store)} alt="App"/>
    );
}