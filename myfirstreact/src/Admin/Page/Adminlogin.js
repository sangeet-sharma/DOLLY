import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import Signup from './Signup';
// import axios from 'axios';
import './Adminlogin.css';
import axios from 'axios';

function Adminlogin() {
  const [adminid,setadminid] = useState("")
  const [adminpassword,setadminPassword] = useState("")
  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault()
  // console.log({email,password})
  axios.post("http://localhost:4000/Adminlogin",{adminid,adminpassword})
  .then(response=>{
    if(response.data.status==="login successfully"){
      alert("Login Successfully....")
      localStorage.setItem("token",true)
      navigate("/AddRoom")
    }
    console.log(response)
  }).catch(err=>{
    console.log(err)
  })
  }

  return (
    <div className="container2">
    <div className="rt">
    <div className="">
      <fieldset>
        <h2 align="center">Admin Login</h2>
    <form onSubmit={handleSubmit} action="">
       <div className="ft">
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" name='adminid'
              onChange={(e)=>setadminid(e.target.value)}
               value={adminid} placeholder='Enter Email' />
          </div>
          <div className="ft">
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password"
               name='adminpassword'
               onChange={(e)=>setadminPassword(e.target.value)}
                value={adminpassword}
              placeholder='Enter Password' />
          </div>
          <br></br>
          <button className="bts"><strong>Log in</strong></button>
          {/* <p>You are agree to our terms and policies</p> */}
          {/* <Link to='/signup'><button className="bts">Create Account</button></Link> */}
     
          </form>
          </fieldset>
          </div>
  </div>
  </div>
  )
}

export default Adminlogin;
