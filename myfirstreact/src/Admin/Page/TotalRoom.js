import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../../Components/Sidenav';
import Navbar from '../../Components/Navbar';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
const TotalRoom = () => {
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

   const DeleteRoom = (id)=>{
    axios.delete(`http://localhost:4000/DeleteRoom/${id}`)
    GetRoomList();
   }

   console.log(roomList)

  return (
    <div>
      <Navbar/>
   <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{flexGrow:1,p: 3}}>
    <h1>Total Room</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>R.No</th>
          <th>Room Type</th>
          <th>Room Capacity</th>
          <th>Facility</th>
          <th>Room Feature</th>
          <th>Food Facility</th>
          <th>Photo</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
      {
        roomList.map((result,id)=>{
            return(
                <>
                  <tr>
                  <td>{id+1}</td>
          <td>{result.roomType}</td>
          <td>{result.roomCapacity}</td>
          <td>{result.Facility}</td>
          <td>{result.Feature}</td>
          <td>{result.Food}</td>
          <td><img style={{width:"100px",height:"60px"}} src={`http://localhost:4000/photos/${result.file}`} alt="" /></td>
          <td onClick={()=>DeleteRoom(`${result.id}`)}> <span className='btn btn-danger'>Delete</span></td>
          <td><Link  to={`/updateRoom/${result.id}`}  className='btn btn-info'> Update</Link></td>
        </tr>
                <p></p>
                </>
            )
        })
      }
 </tbody>
      
      </Table>
    </Box>
    </Box>
    </div>
  )
}

export default TotalRoom
