// import React,{useState} from 'react'
// import Box from '@mui/material/Box';
// //import Typography from '@mui/material/Typography';
// import Sidenav from '../../Components/Sidenav';
// import Navbar from '../../Components/Navbar';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import '../Page/AddRoom.css';
// export default function AddRoom() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };
//   return (
//     <>
//     <Navbar/>
    
//     <Box height={30}/>
//     <Box sx={{ display: 'flex' }}>
//     <Sidenav/>
    
//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
//     <Form className='AddRoomForm' noValidate validated={validated} onSubmit={handleSubmit}>
//       <div className='AddRoomFormHeading'>
//         <h3>Add Room</h3>
//       </div>
//       <Row className="mb-3">
//         <Form.Group as={Col} className='AddRoomFormGroup' md="4" controlId="validationCustom01">
//           <Form.Label>Price</Form.Label>
//           <Form.Control className='AddRoomFormGroupInput'
//             required
//             type="text"
//             placeholder="Enter Room Price...."
//             defaultValue=""
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} className='AddRoomFormGroup' md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control className='AddRoomFormGroupInput'
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue=""
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} className='AddRoomFormGroup' md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control className='AddRoomFormGroupInput'
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} className='AddRoomFormGroup' md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control className='AddRoomFormGroupInput' type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group className='AddRoomFormGroup' as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control className='AddRoomFormGroupInput' type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group className='AddRoomFormGroup' as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control className='AddRoomFormGroupInput' type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       {/* <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group> */}
//       <Row>

//       <Button className='AddRoomButton'  type="submit">Add Room</Button>
//       </Row>
//     </Form>
//       </Box>
//     </Box>
//     </>
//   )
// }

import axios from 'axios';
  import React, { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';
  import Row from 'react-bootstrap/Row';
   import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 import Sidenav from '../../Components/Sidenav';
 import Navbar from '../../Components/Navbar';
  import '../Page/AddRoom.css'
  import { useNavigate } from 'react-router-dom';
  const AddRoom = () => {
     const [price,setPrice] = useState("")
     const [roomType,setRoomType] = useState("")
     const [roomCapacity,setRoomCapacity] = useState("")
    const [Facility,setFacility] = useState("")
    const [Feature,setFeature] = useState("")
    const [Food,SetFood] = useState("")
    const [file, setFile] = useState('');
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({price,roomType,roomCapacity,Facility,Feature,Food,file})
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }

      const formdata = new FormData();
      formdata.append('price',price)
      formdata.append('roomType',roomType)
      formdata.append('roomCapacity',roomCapacity)
      formdata.append('Facility',Facility)
      formdata.append('Feature',Feature)
      formdata.append('Food',Food)
      formdata.append('file', file);

      axios.post("http://localhost:4000/AddRoom/Post", formdata).then((result) => {
        console.log(result)
        navigate("/")
        console.log("Data Successed Into")
        setPrice("")
        setRoomType("")
       setRoomCapacity("")
       setFacility("")
       setFeature("")
       SetFood("")
       setFile("")

      })
      setValidated(true);
    };


    return (
      <div>
         <Navbar/>
         <Box height={30}/>
         <Box sx={{ display: 'flex' }}>
         <Sidenav/>
         <Box height={30} component="main" sx={{flexGrow:1,p:3}}>
        <div className="container1" >
          <div className='AdmissionH3'>
            <h3>Add Room</h3>
          </div>
          <Form noValidate validated={validated} method='post' onSubmit={handleSubmit}
            enctype='multipart/form-data'>


            <Row className="mb-3">
              <Form.Group as={Col} md="10" className='mx-3' controlId="validationCustom01">
                <Form.Label><strong>Price :</strong> </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    required
                    type="text"
                    name='price'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    placeholder="Price..."
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

            </Row>

            <Row className='mb-3' >
              <div className="col-md-10 mx-3">
                <label htmlFor="validationCustom04" className="form-label">
                  <strong>Please Select Room :</strong> </label>
                <select onChange={(e)=>setRoomType(e.target.value)} name='roomType' value={roomType}  className="form-select" id="validationCustom04" required>
                  <option >Select Room...</option>
                <option name='roomType' value="Single_Room">Single Room</option>
                <option name='roomType' value="Double_Room">Double Room</option>
                <option name='roomType' value="Presidential_Room">Presidential Room</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid Course
                </div>
              </div>
            </Row>

            <Row className='mb-3' >
              <div className="col-md-10 mx-3">
                <label htmlFor="validationCustom04" className="form-label">
                  <strong>Max Capacity :</strong> </label>
                <select onChange={(e)=>setRoomCapacity(e.target.value)}
                 name='roomCapacity'
                 value={roomCapacity} className="form-select" id="validationCustom04" required >
                  <option >Select Room Capacity...</option>
                <option  name='roomCapacity' value="one_person" >one Person</option>
                <option name='roomCapacity' value="Double_Person" >Double Person</option>
                <option name='roomCapacity' value="More_than_Two" >More than Two</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid Course
                </div>
              </div>
            </Row>

            <Row className='mb-3' >
              <div className="col-md-10 mx-3">
                <label htmlFor="validationCustom04" className="form-label">
                  <strong>Room Facility :</strong> </label>
                <select onChange={(e)=>setFacility(e.target.value)} 
                name='Facility'
                 value={Facility}  className="form-select" id="validationCustom04" required>
                  <option >Select Room Facility...</option>
                <option name='Facility' value="Ac_Room" >Ac Room</option>
                <option name='Facility' value="Non_Ac_Room">Non Ac Room</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid Course
                </div>
              </div>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                <Form.Label><strong>Features :</strong> </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="About To Room features...."
                    name='Feature'
                    value={Feature}
                    onChange={(e)=>setFeature(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>


            <Row className='mb-3'>
              <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                <Form.Label><strong>Food :</strong> </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="About To Food...."
                    name='Food'
                    value={Food}
                    onChange={(e)=>SetFood(e.target.value)}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                 
                </InputGroup>
              </Form.Group>
            </Row>

            <Form.Group as={Col} md="10" className='mx-5' controlId="validationCustom05">
              <Form.Label><strong> Choose Your Image :</strong></Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                <Form.Control type="file" placeholder="Pin Code..." required
                  onChange={(e) => setFile(e.target.files[0]
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div className='StudentAdmissionButton'>

              <Button type="submit" className='StudentAdmissionSubmitForm'>Submit</Button>
            </div>
          </Form>
      
        </div>
        </Box>
        </Box>
      </div>
    )
  }

  export default AddRoom
