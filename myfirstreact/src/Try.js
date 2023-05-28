import React, { useState, useEffect } from "react";
import "./Bookingsrccss.css";
import moment from "moment";
// import { DatePicker, Space } from "antd";
import { useParams } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import axios from "axios";
import "./Try.css";
import StripeCheckout from 'react-stripe-checkout';
function Try({ match }) {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);
  const sd = moment(checkInDate, "YYYY-MM-DD");
  const ed = moment(checkOutDate, "YYYY-MM-DD");

  const totaldays = moment.duration(ed.diff(sd)).asDays();
  const totalrent = room.price * totaldays;


  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("username"));
    if (currentUser && currentUser.name) {
      setName(currentUser.name);
    }
  }, []);
  

  
  // const BookingDetails = {
  //   // userid:JSON.parse(localstorage.getItem('currentUser')).id,
  //   checkInDate,
  //   checkOutDate,
  //   totalrent,
  //   totaldays,
  // };
  
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("username");

    // Update the state with the retrieved data

    const parsedData = (JSON.parse(storedData).name);

    // Update the state with the retrieved data
   
  
  //  try
  //  {
  //  const result = await axios.post("http://localhost:4000/dummy",id);
  //  console.log(result);
  //  }
  //  catch(error)
  //  {

  //  }
  // }
  // const Booknow = async () => {
  //   try {
  //     const response = await axios.post(`http://localhost:4000/hotelbook`, formdata);
  //     const data = response.data;
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.post(`http://localhost:4000/Try/${id}`);
        const data = response.data;
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoomDetails();
  }, []);
  // useEffect(()=>{
  //   axios.get("http://localhost:4000/login").then((response)=>{
  //     setName(response.data.user[0].name);

  //   }).catch(err=>
  //     {
  //     console.log(err)
  //   })

   

    
  // } ,[])
  return (
    <>
    <Nav/>
      <div className="container">
        <h1>Booking Details</h1>
        <hr></hr>
       
     

        <div className="row justify-center mt-5">
          <div className="col-md-5">
            <label>
              From -date:
              <input
                type="date"
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </label>
            &nbsp; &nbsp;
            <label>To-date:</label>
            <input
              type="date"
              name="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <br></br>
            <br></br>
          </div>
          <br></br>
          <hr className="ty" />
          <br></br>
          <br></br>
          <div className="col-md-5">
            <img
              style={{ width: "400px", height: "300px" }}
              src={`http://localhost:4000/photos/${room.file}`}
              class="rounded float-left"
            />
          </div>
          <br></br>
          <br></br>
          <div className="col-md-5">
           <b>
            {/* <p>Name: </p> */}
            <p>FromDate:{checkInDate}</p>
            <p>ToDate:{checkOutDate}</p>
            <p>TotalDyas:{totaldays} </p>
            <p>RoomPrice:{room.price}</p>
            <p>TotalAmonut:{totalrent}</p>
            
            </b>
        
            <StripeCheckout
              amount={room.price * totaldays * 100}
              token={onToken}
              currency='INR'
              stripeKey="pk_test_51NAsJHSCABOBJOIRobyuV1obP3qmrZhpWIVEWTRHGDvCrticDev8KXbnD4Rg9tc9lgxiP3cpobW1zmlZnbfEyDCq00U6NJuL1q"
            >
              <button className="btn btn-primary">PayNow{" "}</button>
            </StripeCheckout>
          </div>
          <button onClick={Booknow} className="ut" >PayNow</button>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Try;
