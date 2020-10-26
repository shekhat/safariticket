import React, {Component} from 'react';
import "./styles.css"

import Bus2 from './Bus2.png'
import Boat2 from './Boat2.jpg'
import Airplane2 from './Airplane2.jpg'
import Train2 from './Train2.jpg'

class Patnership extends Component{
    render(){
      return(
          <div class="body">
            
  <img class="image" src={Bus2} alt="Bus2"/>
  <br/>
       <p><b>ABOOD BUS</b> is synonymous with affordable lond distance travel in Tanzania network. 
           Founded in 1986, Abood Bus ltd, is the largest provider of intercity bus transportation, 
           serving more than five destinations within Tanzania with a modern, envirimentally friendly fleet. 
           It has become a Tanzanian icon, providing safe, enjoyable and affordable travel to nearly
            1 million passengers each year in Tanzania.</p>
            <br/>

  <img class="image" src={Boat2} alt="Boat2"/>
  <br/><br/>
        <p><b>AZAM MARINE</b> and fast Coastal ferries are moving with the times to provide them with swift and comforatble ferry services.
            the entire fleet of vessels has up to date communication and navigation instrumentation along with stringnet 
            safety equipment on board. The crews arfe well trained and experienced. 
        </p>
  <br/>
   <img class="image" src={Airplane2} alt="Airplane2"/>
   <br/><br/>
         <p><b>AIR TANZANIA</b> is a Tanzania Flight , that allows people to travel allover Tanzania where airports are accessible.
              Air Tanzania was established for all kinds of people but mainly for all kinds of people either high , 
              low or medium income earners. Also Air Tanzania was established to increase the Tanzanian revenue.
               Air Tanzania flies all over East Africa.</p>
  <br/>
  <img class="image" src={Train2} alt="Train2"/>  
  <br/><br/>
         <p><b>APPS TRAIN</b> , is a Train that carries more than 500 people with their luggages.it allows people to travel all over Tanzania.
             It's for all kinds of people depending on their level of income. It's designed mainly for long and short travels.
             It's safe and suitable for all genders and age. But also, it has a carriage where clients can take a rest ,
              also there's an emergency center incase of any emergence.</p>  
<br/>
          </div>
     );
    }
}
export default Patnership;
