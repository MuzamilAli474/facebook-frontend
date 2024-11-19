import React from "react";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
// import './component/App.css'
// import RegistrationForm from './component/RegistrationForm'

function App() {
  return (
    <div className="App">
      {/* <h1>Registration Page</h1>
      <RegistrationForm /> */}
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
