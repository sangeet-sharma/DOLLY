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
           text="  The alarming imbalance between humans and our natural
           world has deepened. As a result, we have lost our 
           connection with nature, we lack understanding of the 
           vital role nature plays in our lives, and we no longer
            know that we are part of the natural world. Plant Spirit Medicine:
             Growing Awareness of Nature, opens the possibility for you to start
              a personal journey of discovery towards balance with nature. "
              img1={require('./img/dining-img2.jpg')}
              img2={require('./img/2.jpg')}/>
        </div>
    )
}
export default Destination;