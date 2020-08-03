import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//importing pages
import Home from './Components/Home.js';

export default class App extends Component{
  render(){
  return (
    <div>
      <Home/>
    </div>
  );
}
}
