import './Destination.css';
import Destinationdata from './Destinationdata';
const Destination=()=>
{
    return(
        <div className="destination">
            <h1>About Our Services</h1>
            {/* <p className='pa'>Make the customer the hero of your story</p> */}
           <Destinationdata 
         ClassName="first-des"
           heading="Rooms and Dining & Drinks."
           text="  All our rooms are elegantly furnished with handmade furniture include luxury en-suite 
           facilities with complimentary amenities pack, flat screen LCD TV, tea/coffee making facilities, 
           fan and the finest pure white linen and towels.  "
              img1={require('./img/cutomer.jpg')}
              img2={require('./img/dining-img.jpg')}/>
            <Destinationdata
            ClassName="first-des-revrse"
           heading="Swimming Pool And Other Services."
           text="  When someone is choosing which hotel to stay in during a business trip 
           or vacation, the choice often comes down to the hotel’s amenities. 
           For many people, a swimming pool is one amenity that will impact 
           the decision they make. In today’s world, swimming pools have become
            an integral element of any modern hotel. "
              img1={require('./img/dining-img2.jpg')}
              img2={require('./img/2.jpg')}/>
        </div>
    )
}
export default Destination;