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
  
  const [fromDate, setfromDate] = useState(" ");
  const [toDate, settoDate] = useState(" ");
 
  //   const sd = moment(fromDate, "DD-MM-YYYY");
  //   const ed = moment(toDate, "DD-MM-YYYY");
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  //const totaldays = moment.duration(ed.diff(sd)).asDays();
  useEffect(() => {
    try {
      const data = axios.post("http://localhost:4000/getroombyid", { id });
      setroom(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  function filterByDate(date) {
    setfromDate(moment(date[0]).format("DD-MM-YYYY"));
    settoDate(moment(date[1]).format("DD-MM-YYYY"));
  }

  return (
    <>
      <div className="bcstl">
        <h>RoomId:</h>

        <div className="bcst2">
          <h>RoomId={id}</h>
          <div className="col-md-5">
            <div>
              <RangePicker format={"DD-MM-YYYY"} onChange={filterByDate} />
            </div>
            <p>Name:</p>
            <p>fromDate:{fromDate}</p>
            <p>ToDate:{toDate}</p>
            <p> TotalDyas: </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingsrc;
