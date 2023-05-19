import React from "react";

import axios from 'axios';
import { useEffect ,useState } from 'react';
import moment from 'moment';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import { Link } from 'react-router-dom';
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Btn.css';
//import CheckHotelPage from './CheckHotelPage';

export default function Booking() {


  
   
    const [show, setShow] = useState(false);
    const [roomList,SetRoomList] = useState([])
    const GetRoomList  = async()=>{
        await axios.get("http://localhost:4000/TotalRoom/Get").then(response=>{
           SetRoomList(response.data)
        }).catch(err=>{
           console.log(err)
        })
          }
        
          useEffect(()=>{
           GetRoomList()
          },[])
return (
    <>
   
     
       
           <div className="row">
            
            
          <Card style={{ width: '18rem' }}>
          <div className="col-md-5">
          <Card.Img variant="top" src={`http://localhost:4000/photos/${roomList.file}`} />
         <p>RoomType: {roomList.roomType}</p> 
         </div>
         <hr/>
      <Card.Body>
      <div className="col-md-5">
        <Card.Title>Price : {roomList.price}</Card.Title>
        <Card.Text>Name:</Card.Text>
       <p>fromDate:</p>
        <p>ToDate:</p>
        <Card.Text>
          RoomCapacity: {roomList.roomCapacity}
        </Card.Text>
        <Card.Text>
          Facility: {roomList.Facility}
        </Card.Text>
        </div>
        <hr/>
    <div>
        <h1>Amount</h1>
        <Card.Text>Total Days:</Card.Text>
        <Card.Text>rent per Days:</Card.Text>
        <Card.Text>Total Amount:</Card.Text>
    </div>
    <div>
        <button>Pay Now</button>
    </div>
      </Card.Body>
    </Card>
    <div>
      
    </div>
   
    </div>
         
        
 
    </>
)
}