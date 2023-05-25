// import React, { useState } from 'react'
// import {Link, useNavigate} from 'react-router-dom';
// import './Signup.css';
// import axios from 'axios'
// import Nav from '../Nav';
// import Footer from '../Footer';
// import {useFormik} from 'formik'
// const invitailValues = {
//   name:"",
//   email:"",
//   password:""
// }

// const  Signup =()=> {
 
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//   const navigate = useNavigate()

  
//   const handleSubmit = (e)=>{
// e.preventDefault()
// axios.post("http://localhost:4000/signup",{name,email,password}).then(response=>{
//   console.log(response)
//   alert("Account Created Successfully!!")
//   navigate("/login")
// }).catch(err=>{
//   console.log(err)
// })
//   }
 
//   // const navigate=useNavigate()
//   return (
//     <>
//     <Nav/>
//     <div className="container2">
//     <div className="rt">
//     <div>
//       <fieldset>
//         <legend align="center"><i>Sign-Up</i></legend>
//     <form onSubmit={handleSubmit} action="">
//     <div className="ft">
//               <label htmlFor="name"><strong>Name:</strong></label>
//               <input type="text" name='name'
//                value={name} 
//               onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'  />
             
//           </div>
//        <div className="ft">
//               <label htmlFor="email"><strong>Email:</strong></label>
//               <input type="email"
//               name='email' value={email} 
//               onChange={(e)=>setEmail(e.target.value)}
//               placeholder='Enter Email' />
         

//           </div>
//           <div className="ft">
//               <label htmlFor="password"><strong>Password:</strong></label>
//               <input type="password" value={password} name='password'
//                onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'  />
     
//           </div>
//           <br></br>
//           <button className="bts" type='submit'><strong>Sign up</strong></button>
//        <br></br>
       
//           <Link to='/login'><button className="bts">login</button></Link>
     
//           </form>
//           </fieldset>
//           </div>
//   </div>
//   </div>
//   <Footer/>
//   </>
//   )
// }

// export default Signup;


import React, { useState } from 'react'
// import '../Auth/Register.css';
// import UserLogin from '../Images/userLogin.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import { signUpSchema } from '../schemas';
import axios from 'axios';
const initialValues = {
  name:"",
  email:"",
  password:""
}

const Register = () => {
  const navigate = useNavigate();
  const sendData = (data) => {
    axios.post('http://localhost:4000/signup', data)
      .then(response => {
        console.log(response.data)
navigate("/login")
      })
      .catch(error => {
        console.log(error);
      });
  }
  
 const {values,handleBlur,touched,handleChange,handleSubmit,errors} =  useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
console.log(values)
sendData(values)
action.resetForm();
    }
  })
  console.log(errors)

  return (
    <form onSubmit={handleSubmit}  className='RegisterPage'>
    <div className='RegisterPageLeft'>
    <div className='RegisterPageLeftHeading'>
  <h4>Add New Account</h4>
    </div>
    <div>
        <input type="text"
         name='name'
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
          placeholder='Name...' />
    </div>
    { errors.name && touched.name ? 
    (<p className='form-error text-danger'>{errors.name}</p>):null}

    <div>
        <input type="email"
         name='email'
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
        placeholder='Email...' />
    </div>
    { errors.email && touched.email ? 
    (<p className='form-error text-danger'>{errors.email}</p>):null}
    <div>
        <input type="password" 
        name='password' 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
         placeholder='Password...' />
    </div>
    { errors.password && touched.password ? 
    (<p className='form-error text-danger'>{errors.password}</p>):null}
    <div className='RegisterPageLeftButton'>
        <button type='submit'>Register</button>
    </div>
    
    <div className='RegisterPageLeftLink'>
       <Link to="/">Already Create Account</Link> 
    </div>
    </div>

    <div className='RegisterPageRight'>
        {/* <img src={UserLogin} alt="" /> */}
    </div>

  
</form>
  )
}

export default Register


