import React from "react";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import OtpVerification from "./component/OtpVerify";
// import './component/App.css'
// import RegistrationForm from './component/RegistrationForm'

function App() {
  return (
    <div className="App">
      {/* <h1>Registration Page</h1>
      <RegistrationForm /> */}
      <SignUp />
      <OtpVerification/>
      <Login />
    </div>
  );
}

export default App;
