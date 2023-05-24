import React, { useState, useEffect } from "react";
import "./Bookingsrccss.css";
import moment from "moment";
 import { DatePicker, Space } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

function Try({ match }) {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const sd = moment(checkInDate, "YYYY-MM-DD");
      const ed = moment(checkOutDate, "YYYY-MM-DD");
      
       const totaldays = moment.duration(ed.diff(sd)).asDays();
       const totalrent=room.price*totaldays;
       async function BookRoom()
       {
        const BookingDetails ={
          room,
         
          // userid:JSON.parse(localstorage.getItem('currentUser')).id,
           checkInDate,
           checkOutDate,
           totalrent,
           totaldays
          }
try
{
const result = await axios.post("/bookingdetails",BookingDetails);
}
catch(error)
{
 
}
}
useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Try/${id}`);
        const data = response.data;
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoomDetails();
  }, []);
  return (
    <>
    <div>
    <h1>Booking Details....</h1>
      <div className="col-md-5">
             <div>
               <label className="ro">
                 From -date:
                  <input
                   type="date"
                   name="checkInDate"
                   value={checkInDate}
                   onChange={(e) => setCheckInDate(e.target.value)}
                 />
              </label>
             </div>

             <br></br>

             <div>
               <label className="ro">
                 To-date:
                  <input
                   type="date"
                   name="checkOutDate"
                   value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                 />
               </label>
             </div>
<div>
  <p>Name: </p>
<p>fromDate:{checkInDate}</p>
            <p>ToDate:{checkOutDate}</p>
             <p> TotalDyas:{totaldays} </p>
</div>
<div>
  
      <h>RoomPrice:{room.price}</h>;
      <p>TotalAmonut:{totalrent}</p>
      <img style={{width:"100px",height:"60px"}} src={`http://localhost:4000/photos/${room.file}`} />
      <button onClick={BookRoom}>PayNow</button>

      </div>
    </div>
    </div>
    </>
  );
}







export default Try;
