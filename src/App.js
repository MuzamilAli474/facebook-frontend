import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Forget from './components/forgetpassword.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />  
        <Route path="/forgetpassword" element={<Forget />} />  
      </Routes>
    </Router>
  );
}

export default App;
