import React from 'react';
import ReactDOM from 'react-dom';


import Footer from './Footer'
import Header from './Header'



class App extends React.Component{
  render(){
    return(
      <div>
      <Header/>
    
      <Footer/>

     
    
      
     </div>


    );
  }
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

