import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './Signup.css';
import axios from 'axios'
import Nav from '../Nav';
import Footer from '../Footer';
function Signup() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (e)=>{
e.preventDefault()
axios.post("http://localhost:4000/signup",{name,email,password}).then(response=>{
  console.log(response)
  navigate("/login")
}).catch(err=>{
  console.log(err)
})
  }
  // const navigate=useNavigate()
  return (
    <>
    <Nav/>
    <div className="rt">
    <div className="">
      <fieldset>
        <legend align="center">Sign-Up</legend>
    <form onSubmit={handleSubmit} action="">
    <div className="ft">
              <label htmlFor="name"><strong>Name:</strong></label>
              <input type="text" name='name'
               value={name} 
              onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'  />
          </div>
       <div className="ft">
              <label htmlFor="email"><strong>Email:</strong></label>
              <input type="email"
              name='email' value={email} 
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Enter Email' />
          </div>
          <div className="ft">
              <label htmlFor="password"><strong>Password:</strong></label>
              <input type="password" value={password} name='password'
               onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'  />
          </div>
          <br></br>
          <button className="bts" type='submit'><strong>Sign up</strong></button>
       <br></br>
       
          <Link to='/login'><button className="bts">login</button></Link>
     
          </form>
          </fieldset>
          </div>
  </div>
  <Footer/>
  </>
  )
}

export default Signup;
