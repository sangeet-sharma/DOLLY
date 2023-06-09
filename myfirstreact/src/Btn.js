import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import "./Btn.css";
import Nav from "./Nav";
import Footer from "./Footer";
//import CheckHotelPage from './CheckHotelPage';
import { DatePicker, Space } from "antd";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { RangePicker } = DatePicker;

export default function Btn({match}) {
  const [show, setShow] = useState(false);
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [roomList, SetRoomList] = useState([]);
const[data, SetData]= useState([]);
const { name } = useParams();
  const GetRoomList = async () => {
    await axios
      .get("http://localhost:4000/TotalRoom/Get")
      .then((response) => {
        SetRoomList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };    

  useEffect(() => {
    GetRoomList();
  }, []);
  function filterByDate(date) {
    setfromDate(moment(date[0]).format("DD-MM-YYYY"));
    settoDate(moment(date[1]).format("DD-MM-YYYY"));
  }
  return (
    // <div>
    //   {/* <Button variant="danger">Danger</Button>{' '} */}
    //   <h1 className="text-center text-warning my-5">ROOMS CATEGORY </h1>
    //   <div className="container">
    //     <div className="row">
    //     <div className="col-md-3">
    //      <div class="card" >
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU" class="card-img-top" alt="..."/>
    //             <div class="card-body">
    //                 <h5 class="card-title">Single Room</h5>
    //                 <p class="card-text">a room with a single bed that is intended for one person to sleep</p>
    //                  <Link type="btn" class="btn btn-primary" to='/SearchItem'>Read More</Link>
    //                 </div>
    //      </div>
    //      </div>

    //         <div className="col-md-3">
    //         <div class="card" >
    //         <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg" class="card-img-top" alt="..."/>
    //             <div class="card-body">
    //                 <h5 class="card-title">Double Room</h5>
    //                 <p class="card-text">A double room is a hotel room with a double bed that can accommodate two people</p>
    //                 <Link type='btn' class="btn btn-primary" to='/SearchItem1' >Read More</Link>
    //                 </div>
    //        </div>
    //        </div>

    //         <div className="col-md-3">
    //         <div class="card" >
    //         <img src="https://www.eroshotels.co.in/wp-content/uploads/2021/09/468x310.jpg" class="card-img-top" alt="..."/>
    //             <div class="card-body">
    //                 <h5 class="card-title">Presendtial Room</h5>
    //                 <p class="card-text">A large apartment  with separate living area, bedrooms  and a dining area as well.</p>
    //                 <Link type='btn' class="btn btn-primary" to='/SearchItem2'>Read More</Link>
    //                 </div>
    //      </div>
    //      </div>

    //   </div>
    // </div>
    // </div>
    <>
      <Nav />
      <h1>Our Rooms Facility</h1>

      {roomList.map((result, id) => {
        return (
          <Container>
            <Row xs="auto" className="justify-content-md-center row1">
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:4000/photos/${result.file}`}
                  />
                  <Card.Body>
                    <Card.Title><b>Price</b> : {result.price}</Card.Title>
                    <Card.Text><b>RoomType</b>: {result.roomType}</Card.Text>

                    <Card.Text><b>RoomCapacity</b>: {result.roomCapacity}</Card.Text>
                    <Card.Text><b>Facility</b>: {result.Facility}</Card.Text>
                    <Card.Text><b>Feature</b>: {result.Feature}</Card.Text>
                    <Card.Text><b>Food</b>: {result.Food}</Card.Text>
                    {/* <Card.Text>Fromdate: {setfromDate}</Card.Text> */}
                    {/* <Link type="btn" to='/login'> */}
                      <Link
                      type="btn"
                      to={`/Try/${result.id}`}
                    >
                     <Card.Text><b>Food</b>: {(name)}</Card.Text>
                      <Button variant="primary">Booking Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
                </Col>
              </Row>

                </Container>
        );
      })}
      {/* <Link type="btn" className="siButton" to='/CheckHotelPage'>Book Now</Link> */}
      <Footer />
    </>
  );
}
