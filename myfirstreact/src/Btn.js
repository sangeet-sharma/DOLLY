import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { NavLink } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
 import { Link } from 'react-router-dom';
import './Btn.css';
export default function Btn() {
  return (
    <div>
      {/* <Button variant="danger">Danger</Button>{' '} */}
      <h1 className="text-center text-warning my-5">ROOMS CATEGORY </h1>
      <div className="container">
        <div className="row">
        <div className="col-md-3">
         <div class="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Single Room</h5>
                    <p class="card-text">a room with a single bed that is intended for one person to sleep</p>
                     <Link type="btn" class="btn btn-primary" to='/SearchItem'>Read More</Link> 
                    </div>
         </div> 
         </div>
        

       
            <div className="col-md-3">
            <div class="card" >
            <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Double Room</h5>
                    <p class="card-text">A double room is a hotel room with a double bed that can accommodate two people</p>
                    <Link type='btn' class="btn btn-primary" to='/SearchItem1' >Read More</Link>
                    </div>
           </div> 
           </div>


        
            <div className="col-md-3">
            <div class="card" >
            <img src="https://www.eroshotels.co.in/wp-content/uploads/2021/09/468x310.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Presendtial Room</h5>
                    <p class="card-text">A large apartment  with separate living area, bedrooms  and a dining area as well.</p>
                    <Link type='btn' class="btn btn-primary" to='/SearchItem2'>Read More</Link>
                    </div>
         </div> 
         </div>
      

        
        

      </div>
    </div>
    </div>
  )
};
