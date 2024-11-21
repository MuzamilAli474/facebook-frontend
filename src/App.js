import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";

// Import the pages



// Import css
import "./App.css"
import RegistrationForm from "./component/RegistrationForm";
import LoginForm from "./component/LoginForm";
import Timeline from "./component/Timeline";
import Creatpost from "./component/Creatpost";
import LogoutButton from "./component/Logout";

function App() {
    return (
        <div className="App">
            <Router>
            <div className="list">
                    <ul>
                        <li><Link to="/">Timeline</Link></li>
                        <li><Link to="RegistrationForm">Register</Link></li>
                        <li><Link to="LoginForm">Login</Link></li>
                        <li><Link to="Timeline">Profile</Link></li>
                        <li><Link to="Creatpost">Creatpost</Link></li>
                        <li><Link to="LogoutButton">Logout</Link></li>


                    </ul>
                </div>
                <Routes>
                    <Route exact path="/" element={<h1>Home Page</h1>} />
                    <Route exact path="RegistrationForm" element={<RegistrationForm/>} />
                    <Route exact path="LoginForm" element={<LoginForm/>} />
                    <Route exact path="Timeline" element={<Timeline/>} />
                    <Route exact path="Creatpost" element={<Creatpost/>} />
                    <Route exact path="LogoutButton" element={<LogoutButton/>} />



                </Routes>
               
            </Router>
        </div>
    );
}
export default App;