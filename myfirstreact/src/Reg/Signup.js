import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import axios from 'axios';
import Nav from '../Nav';
import Footer from '../Footer';
import './Signup.css';
const initialValues = {
  name: "",
  email: "",
  password: ""
}

const Register = () => {
  const navigate = useNavigate();
  const sendData = (data) => {
    axios.post('http://localhost:4000/signup', data)
      .then(response => {
        console.log(response.data)
        alert("Account Created Successfully!!")
        navigate("/login")
      })
      .catch(error => {
        console.log(error);
      });
  }
 
   
         
   const { values, handleBlur, touched, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values)
      sendData(values)
      action.resetForm();
    }
  })
  console.log(errors)

  return (
    <>
    <Nav/>
    <div className="container2">
    <div className="rt">
      <fieldset>
    <legend><i>Sign-Up</i></legend>
    <form onSubmit={handleSubmit} action="">
     
         
        
        <div className="ft">
          <label><strong>Name:</strong></label>
          <input class="w3" type="text"
            name='name'
            value={values.name}
            onChange={handleChange}
             onBlur={handleBlur}
            placeholder='Name...' />

{errors.name && touched.name ?
          (<p className='form-error text-danger'>{errors.name}</p>) : null}
        </div>
       

        <div className="ft">
          <label><strong>Email:</strong></label>
          <input class="w3" type="email"
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Email...' />

{errors.email && touched.email ?
          (<p className='form-error text-danger'>{errors.email}</p>) : null}
        </div>
       
        <div className="ft">
          <label><strong>Password:</strong></label>
          <input class="w3" type="password"
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Password...' />

{errors.password && touched.password ?
          (<p className='form-error text-danger'>{errors.password}</p>) : null}
        </div>
        <br></br>
        <div className='RegisterPageLeftButton'>
          <button className='bts' type='submit'>Sign up</button>
        </div>
        <br></br>
        <div className='RegisterPageLeftLink'>
          <Link to="/login">Already Create Account?</Link>
        </div>
    
    </form>
    </fieldset>
    </div>
    </div>
    <Footer/>
    </>

  )}

export default Register