import React, { useState, useEffect } from "react";
import "./Bookingsrccss.css";
// import { useParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function Bookingsrc({ match }) {
  const { id } = useParams();

  const [rooms, setroom] = useState(" ");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  
  
    const sd = moment(checkInDate, "DD-MM-YYYY");
  const ed = moment(checkOutDate, "DD-MM-YYYY");
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const totaldays = moment.duration(ed.diff(sd)).asDays();
  const totaldays = moment(checkOutDate, "YYYY-MM-DD").diff(moment(checkInDate, "YYYY-MM-DD"), 'days');

  useEffect(() => {
    try {
      const data = axios.post("http://localhost:4000/getroombyid", { id });
      setroom(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
 

  return (
    <>
      <div className="bcstl">
        <h>RoomId:</h>

        <div className="bcst2">
          <h>RoomId={id}</h>
          <div className="col-md-5">
            
            <div>
          <label className='ro'>
            Check-in date:
            <input type="date" name='checkInDate' value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
          </label>
        </div>

        <br></br>

        <div>
          <label className='ro'>
            Check-out date:
            <input type="date" name='checkOutDate' value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
          </label>
        </div>

        <br></br>
            <p>Name:</p>
            <p>fromDate:{checkInDate}</p>
            <p>ToDate:{ checkOutDate}</p>
            <p> TotalDyas:{totaldays} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingsrc;
