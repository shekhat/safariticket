import React from 'react';

import "./styles.css"

import Taxi from './Taxi.jpg'
import Food from './Food.jpg'
import Accommodation from './Accommodation.jpg'

import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

class Service extends React.Component{
    render(){
        const content = [
            {
              title: 'Ticketing',
              description:
                'We offer ticketing for atmost all travels , our ticketing system is much easier , fun and affordable for almost everyone.',
              button: 'Read More',
              image:'https://i.imgur.com/DCdBXcq.jpg' ,
              user: 'Daniel',
              userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
            },
            {
              title: 'Accommodation',
              description:
                ' Accomodation is also given to those who book for our travels. Once you book for travels you also get a chance to book for accomodation incase of long travels or even for the short ones the short ones, also you will be accessed to remiders incase you have not reached the destination',
              button: 'Discover',
              image: Accommodation,
              user: 'Samantha',
              userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
            },
            {
              title: 'Ride request',
              description:
                ' Travelers can request for rides at their place of destination depending on their preferences and at an affordable price.',
              button: 'Discover',
              image: Taxi,
              user: 'Samantha',
              userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
            },
            {
              title: 'Fast Food',
              description:
                ' A chance to order food is given to travelers who use Safari Ticket for their travel bookings. You can order food after you have booked for yiu travel.',
              button: 'Discover',
              image: Food,
              user: 'Samantha',
              userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
            },
          ]

      return(

<div class="body">
<Slider autoplay={2000} classNames={horizontalCss}>
	{content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))}
</Slider>
<br/>
<h1>Our Services</h1>
      <h3>Ticketing</h3>
<p> Safari Ticket allows you to book your travels before hand and most importantly you can book from any place and at any time. 
    Safari Ticket gives you reminders for your travels before the day of the travel ,
     it simplifies the whole system and make it a whole lot easy and fun.
</p>
      <br/>
     <h3>Accomodation</h3>
<p>Safari Ticket allows you to book for accomodation for those with long travels and for those who are new to their place of destination.
     Accomodation is given at an affordable price depending on your preference.
     But for those who will have to continue with their travels then Safari Ticket will give them an early morning reminder to avoid missing their travels</p>
      <br/>
    <h3>Fast Food</h3>
<p>This service is specificaly for those who travel by Bus , 
    Safari Ticket allows them to order Food  before hand at the hotel that the Bus is going stop for either
     BreakFast , Lunch or Dinner. </p>
      <br/>
     <h3>Fast Driver</h3>
<p>Safar Ticket allows you to request for rides at the area of  destination ,
     there are different kinds of rides depending on your preference ,
      but atmost all automobiles are available at your service and at an affordable price.  </p>

    <br/><br/>
          </div>
                   
         );
     }
 }
 export default Service; 