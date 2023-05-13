import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import Signup from './Signup';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/login",{email,password})
    .then(response=>{
      if(response.data.status==="login successfully"){
        alert("Login Successfully....")
        localStorage.setItem("token",true)
        navigate("/Btn")
      }
      console.log(response)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="rt">
    <div className="">
      <fieldset>
        <h2 align="center">Sign-in</h2>
    <form onSubmit={handleSubmit} action="">
       <div className="ft">
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" name='email'
              onChange={(e)=>setEmail(e.target.value)}
               value={email} placeholder='Enter Email' />
          </div>
          <div className="ft">
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password"
               name='password'
               onChange={(e)=>setPassword(e.target.value)}
                value={password}
              placeholder='Enter Password' />
          </div>
          <br></br>
          <button className="bts"><strong>Log in</strong></button>
          {/* <p>You are agree to our terms and policies</p> */}
          <Link to='/signup'><button className="bts">Create Account</button></Link>
     
          </form>
          </fieldset>
          </div>
  </div>
  )
}

export default Login;
