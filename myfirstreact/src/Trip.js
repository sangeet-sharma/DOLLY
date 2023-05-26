import './Tripstyle.css';
import Tripdata from './Tripdata';
import {Link} from 'react-router-dom'
function Trip()
{
  return(
    <div className='trip'>
        <h1>Our Rooms</h1>
        <p className='pa'> </p>
        <div className='tripcard'>
            <div className='complete'>
            <Tripdata 
            image={require('./img/gallery1.jpg')}
            // heading="Single Room"
            /*text=" The alarming imbalance between humans and our natural
            world has deepened. As a result, we have lost our 
            connection with nature, we lack understanding of the 
            vital role nature plays in our lives, and we no longer
             know that we are part of the natural"*/
            />
             <Link type="button" class="btn btn-primary" to='/Btn'>Single Room</Link>
             
            </div>
            
            <div className='complete'>
              <Tripdata 
            image={require('./img/gallery2.jpg')}
            // heading="Dublex Room"
            /*text=" The alarming imbalance between humans and our natural
            world has deepened. As a result, we have lost our 
            connection with nature, we lack understanding of the 
            vital role nature plays in our lives, and we no longer
             know that we are part of the natural"*/
            />
           <Link type="button" class="btn btn-primary" to='/Btn'>Double Room</Link>
            </div>
            <div className='complete'>
            <Tripdata 
            image={require('./img/gallery3.jpg')}
            // heading="Single Room"
            /*text=" The alarming imbalance between humans and our natural
            world has deepened. As a result, we have lost our 
            connection with nature, we lack understanding of the 
            vital role nature plays in our lives, and we no longer
             know that we are part of the natural"*/
            />
             <Link type="button" class="btn btn-primary" to='/Btn'>Presidential Suite</Link>
             
            </div>
        </div>
    </div>
  );  
}
export default Trip;