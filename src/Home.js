import React, {Component} from 'react';

import "./styles.css"

import Train2 from './Train2.jpg'
import Bus2 from './Bus2.png'
import Airplane2 from './Airplane2.jpg'
import Boat2 from './Boat2.jpg'



import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';


class Home extends Component{
  render(){
    const content = [
      {
        title: 'Bus',
        description:
          'Safari Ticket allows you to book for Bus fron any company that is patnered with Safari Ticket. You can from anywhere and at any price given to your economic situation.',
        button: 'Read More',
        image:  Bus2,
        user: 'Daniel',
        userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
      },
      {
        title: 'Airplane',
        description:
          '  Safari Ticket allows you to book for Airplane fron any company that is patnered with Safari Ticket. You can from anywhere and at any price given to your economic situation.',
        button: 'Discover',
        image: Airplane2,
        user: 'Samantha',
        userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
      },
      {
        title: 'Boat',
        description:
          ' Safari Ticket allows you to book for Boat fron any company that is patnered with Safari Ticket. You can from anywhere and at any price given to your economic situation. ',
        button: 'Discover',
        image: Boat2,
        user: 'Samantha',
        userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
      },
      {
        title: 'Train',
        description:
          ' Safari Ticket allows you to book for Train fron any company that is patnered with Safari Ticket. You can from anywhere and at any price given to your economic situation.',
        button: 'Discover',
        image: Train2,
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
       <p>Safari Ticket,is an online booking system  designed mainly for travel bookings,
          the system makes it easy to book all travels from either Train, Bus, Boat and Airplane.
           Safari Ticket is easy to use and the bookings are simply easy,
           to use Safari Ticket you only need internet access.<br/><br/>
            Safari Ticket is a 24hour booking system.Safari Ticket ooffers travel booking for people of all economic class,
             Safari Ticket bookings are all done at an affordable price.Safari Ticket is designed specifically for the travellers
             that's why the safety , well being and welfare of the travellers is our top priority.<br/><br/>
             We receive comments and suggestions from our clients through our contact page, but also, 
             for any instant help then please check us through our email and phone number found in the contact page.
             </p>
             <br/>
 </div>
        );
    }
  }
  
  export default Home;      