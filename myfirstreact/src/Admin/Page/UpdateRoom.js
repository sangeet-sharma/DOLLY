import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
 import Sidenav from '../../Components/Sidenav';
 import Navbar from '../../Components/Navbar';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
 import Form from 'react-bootstrap/Form';
 import InputGroup from 'react-bootstrap/InputGroup';
 import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateRoom = () => {
    const [price,setPrice] = useState("")
    const [roomType,setRoomType] = useState("")
    const [roomCapacity,setRoomCapacity] = useState("")
   const [Facility,setFacility] = useState("")
   const [Feature,setFeature] = useState("")
   const [Food,SetFood] = useState("")
   const [file, setFile] = useState('');
   const [UpdateRoom, setUpdateRoom] = useState({})
   const [validated, setValidated] = useState(false);

   const {id} = useParams();

   const getRoomUpdate  =()=>{
fetch(`http://localhost:4000/UpadateRoom/${id}`).then((response)=>{
    response.json().then((result)=>{
        console.log(result)
        setPrice(result[0].price)
        setRoomType(result[0].roomType)
        setRoomCapacity(result[0].roomCapacity)
        setFacility(result[0].Facility)
        setFeature(result[0].Feature)
        SetFood(result[0].Food)
    })
})
   }
   useEffect(()=>{
    getRoomUpdate()
   },[])

  

   const handleSubmit =(e)=>{
    e.preventDefault()
      axios.put(`http://localhost:4000/roomUpdate/${id}`,{price,
      roomType,
      roomCapacity,
      Facility,
      Feature,
      Food
    }).then(response=>{
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
     
   }

  return (
    <div>
         <Navbar/>
         <Box height={30}/>
         <Box sx={{ display: 'flex' }}>
         <Sidenav/>
         <Box height={30} component="main" sx={{flexGrow:1,p: 3}}>
            <div className='container1'>
            <div className='AdmissionH3'>
      <h3>Update Page</h3>
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

            {/* <Form.Group as={Col} md="10" className='mx-5' controlId="validationCustom05">
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
            </Form.Group> */}
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

export default UpdateRoom
