import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Signup from './Signup';
import axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [data, userData] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("please fill the details")
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((response) => {
        if (response.data.status === "login Failed...") {
          alert(" pls enter valid entries ");
        } else {
          alert("Login Successfully....");
          localStorage.setItem("token", true);
          setName(response.data);
          localStorage.setItem(
            "userDataDivya",
            JSON.stringify(response.data[0])
          );
          // localStorage.setItem("userDataDivya", response.data);

          console.log(response);
          navigate("/Btn");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var divya = JSON.parse(localStorage.getItem("userDataDivya"));
  return (
    <>
      <Nav />
      <div className="container2">
        <div className="rt">
          <div>
            <fieldset>
              <h2 align="center">
                <i>Sign-in</i>
              </h2>
              <form onSubmit={handleSubmit} action="">
                <div className="ft">
                  <label htmlFor="email">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter Email"
                  />
                </div>

                <div className="ft">
                  <label htmlFor="password">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password"
                  />
                </div>
                <br></br>
                <button className="bts">
                  <strong>Log in</strong>
                </button>
                <br></br>

                {/* <p>You are agree to our terms and policies</p> */}
                <Link to="/signup">
                  <button className="bts">Create Account</button>
                </Link>
                {/* <p>Welcome {divya[0].name}</p> */}
              </form>
            </fieldset>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
