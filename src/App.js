import React from "react";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import OtpVerification from "./component/OtpVerify";
import ForgetPassword from "./component/ForgetPassword";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
// import './component/App.css'
// import RegistrationForm from './component/RegistrationForm'

function App() {
  return (
    <div className="App">
      {/* <h1>Registration Page</h1>
      <RegistrationForm /> */}
      {/* <SignUp /> */}
      {/* <OtpVerification/> */}
      {/* <Login /> */}
      {/* <ForgetPassword/> */}
     
      <BrowserRouter>
      <Navbar/>
                 <Routes>
                     <Route exact path="/" element={<h1>This Is My Social App</h1>} />
                     <Route exact path="/SignUp" element={<SignUp />} />
                     <Route exact path="OtpVerification" element={<OtpVerification />} />
                     <Route exact path="ForgetPassword" element={<ForgetPassword />} />

                     <Route exact path="Login" element={<Login />} />
                    
                 </Routes>
                 {/* <div className="list">
                     <ul>
                         <li><Link to="/">Home</Link></li>
                      <li><Link to="SignUp">Sign Up</Link></li>
                        <li><Link to="Login">Login</Link></li>
                   </ul>
                 </div> */}
           </BrowserRouter>
    </div>
  );
}

export default App;
