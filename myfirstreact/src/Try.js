import React, { useState, useEffect } from "react";
import "./Bookingsrccss.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Try.css";
function Try({ match }) {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const sd = moment(checkInDate, "YYYY-MM-DD");
  const ed = moment(checkOutDate, "YYYY-MM-DD");

  const totaldays = moment.duration(ed.diff(sd)).asDays();
  const totalrent = room.price * totaldays;

  const formdata = new FormData();
  formdata.append('checkInDate', checkInDate)
  formdata.append('checkOutDate', checkOutDate)

  // formdata.append('totaldays',totaldays)
  // formdata.append('totalrent',totalrent)

  const BookingDetails = {
    // userid:JSON.parse(localstorage.getItem('currentUser')).id,
    checkInDate,
    checkOutDate,
    totalrent,
    totaldays
  }

  //  try
  //  {
  //  const result = await axios.post("http://localhost:4000/dummy",id);
  //  console.log(result);
  //  }
  //  catch(error)
  //  {

  //  }
  // }
  const Booknow = async () => {
    try {
      const response = await axios.post(`http://localhost:4000/hotelbook`, formdata);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
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
  return (
    <>
      <div className="container">
        <h1>Booking Details....</h1>
        <hr></hr>
        <div className="row justify-center mt-5">

          <div className="col-md-5" >
            <label >
              From -date:

              <input
                type="date"
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)} />

            </label>
            &nbsp; &nbsp;




            <label>
              To-date:
            </label>
            <input
              type="date"
              name="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)} />
            <br></br>
            <br></br>
          </div>
          <br></br>
          <hr className="ty" />
          <br></br>
          <br></br>
          <div className="col-md-5">
            <img
              style={{ width: "400px", height: "300px", }}
              src={`http://localhost:4000/photos/${room.file}`} class="rounded float-left" />

          </div>
          <br></br>
          <br></br>
          <div className="col-md-5">
           <b>
            <p>Name: </p>
            <p>FromDate:{checkInDate}</p>
            <p>ToDate:{checkOutDate}</p>
            <p>TotalDyas:{totaldays} </p>
            <p>RoomPrice:{room.price}</p>
            <p>TotalAmonut:{totalrent}</p>
            
            </b>
        
           
          </div>
          <button onClick={Booknow} className="ut" >PayNow</button>

        </div>
      </div>
    </>
  );
}

export default Try;
