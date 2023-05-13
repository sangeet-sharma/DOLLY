import React, { useState } from 'react';
import './SearchForm.css';
import axios from 'axios';

function SearchForm() {
//   const [location, setLocation] = useState('');
  const [name, setName] = useState("");
  const[roomtype,setRoomType]=useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const[roomfacility,setRoomFacility]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({name,roomtype,checkInDate,checkOutDate})
    axios.post("http://localhost:4000/postCategory",{name,roomtype,roomfacility,checkInDate,checkOutDate}).then(response=>{
      console.log(response)
      alert("Are You sure for Booking")
    }).catch(err=>{
      console.log(err)
    })
    // Add logic for handling the form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
        <fieldset >
        <legend align="center"><b>Room Booking</b></legend>
        <br></br>
        <div>
        <label className='ro'>
        Name:
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br></br>
      <label className='ro'>
        Room Type:
        </label>
        <select name='roomtype' value={roomtype} onChange={(e)=>setRoomType(e.target.value)} className='date'>
 <option value="select">-----</option>
<option name="roomtype" value="single" onChange={(e)=>setRoomType(e.target.value)}>Single</option>
<option name="roomtype" value="double" onChange={(e)=>setRoomType(e.target.value)}>Double</option>
<option name="roomtype" value="ps"  onChange={(e)=>setRoomType(e.target.value)}>Presidential Suite</option>
       </select>

       <label className='ro'>
        Room Facility:
        </label>
        <select name='roomfacility' value={roomfacility} onChange={(e)=>setRoomFacility(e.target.value)} className='date'>
 <option value="select">-----</option>
<option name="roomfacility" value="ac" onChange={(e)=>setRoomFacility(e.target.value)}>AC</option>
<option name="roomfacility" value="non-ac" onChange={(e)=>setRoomFacility(e.target.value)}>NON-AC</option>
{/* <option name="roomtype" value="ps"  onChange={(e)=>setRoomType(e.target.value)}>Presidential Suite</option> */}
       </select>
      
      </div>

<br></br>
           
      
      <div>
      <label className='ro'>
        Check-in date:
        <input type="date" name ='checkInDate' value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
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

      <button type='submit' className='btn'>Submit</button>
      </fieldset>
    </form>
  );
}

export default SearchForm;