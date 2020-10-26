import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom';

import logo from './logo.png';

import Home from './Home';
import About from './About';
import Service from './Service';
import Patnership from './Patnership';
import Contact from './Contact';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Seat from './Seat'

class Header extends Component {
    render() {
      return (
          <Router>
        <div className="header">
          <div className="row">
            <div className="column">
              <div className="logo">
              <img className="logo" src={logo} alt="LOGO"/>
              </div>
            </div>
            <div className="column form-search">
            <input class="safari" type="text" placeholder="From*"/>
                <input  class="safari"  type="text" placeholder="To*"/>
                

                <input  class="safari"  type="text" placeholder="Date*"/>
                

                <Link to='/seat' className="links">Book</Link>
            </div>
            <div className="column signup">
              <Link to="/signup" className="links">Sign Up</Link>
              <Link to="/signin" className="links">Sign In</Link>
            </div>
          </div>
       
          <div className="nav">
            <Link to="/"  className="links">Home</Link>
            <Link to="/About"  className="links">About</Link>
            <Link to="/Service"  className="links">Service</Link>
            <Link to="/Patnership" className="links">Patnership</Link>
            <Link to="/Contact"  className="links">Contact</Link>
          </div>
        </div>


  <Switch>
      <Route exact path="/">
          <Home/>
      </Route>

      <Route path="/About">
          <About/>
      </Route>

      <Route path="/SignUp">
          <SignUp/>
      </Route>

      <Route path="/SignIn">
          <SignIn/>
      </Route>

      <Route path="/Service">
          <Service/>
      </Route>

      <Route path="/Patnership">
          <Patnership/>
      </Route>

      <Route path="/Contact">
          <Contact/>
      </Route>
      <Route path="/seat">
          <Seat/>
      </Route>

  </Switch>

  </Router>
  );
  }
  }
  export default Header;