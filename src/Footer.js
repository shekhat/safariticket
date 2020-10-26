import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';
import SignIn from './SignIn';

class Footer extends Component {
    render() {
      return (
        <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">Safari Ticket <i>ONLINE TRAVEL BOOKINGS</i> is an initiative  to help traveler book tickets easily. 
               Safari Ticket  focuses on providing the most efficient and simple way to book for Tickets.
                We will help traveler come up with best travelling experience.</p>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li><a href="airplane.html">Airplane</a></li>
                <li><a href="Train.html">Train</a></li>
                <li><a href="Boat.html">Boat</a></li>
                <li><a href="Bus.html">Bus</a></li>
              
              </ul>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="About.html">About Us</a></li>
                <li><a href="Contact.html">Contact Us</a></li>
                <li><a href="Service.html">service</a></li>
                <li><a href="Patnership.html">Patnership</a></li>
               
              </ul>
            </div>
          </div>
          <hr/>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2020 >
           all rights are reserved
              </p>
            </div>
  
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
              </ul>
            </div>
          </div>
        </div>
  </footer>
  );
  }
  }
  export default Footer;