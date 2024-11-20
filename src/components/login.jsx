import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleNavigateToSignup = () => {
        navigate('/signup');
      };
      const handleNavigateToforgetpassword = () => {
        navigate('/forgetpassword');
      };

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = { email, password };
        try {
            const response = await fetch(`http://localhost:4000/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message || 'Login successful!');
                setEmail(""); 
                setPassword(""); 
            } else {
                setError(data.message || 'Login failed!');
            }
        } catch (error) {
            setError(' error ' + error.message);
        }
    };

    return (
        <Paper elevation={3} sx={{ margin: "auto", marginTop: "50px", width: "35%", textAlign: "center", py: 5 }}>
            <Typography variant='h5'>Login Form</Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    sx={{ width: "80%", my: 1 }}
                />
                <TextField
                    id="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    variant="outlined"
                    sx={{ width: "80%", my: 1 }}
                />
                <br />
                <Button variant="contained" type="submit" sx={{ margin: '10px 0px' }}>Login</Button> <br />
           

            </form>
            {message && <Alert severity="success" sx={{ mt: 2, width: '80%', borderRadius: "20px", margin: 'auto' }}>{message}</Alert>}
            {error && <Alert severity="error" sx={{ mt: 2, width: '80%', borderRadius: "20px", margin: 'auto' }}>{error}</Alert>} <br />
            <Button 
      variant="text" 
      sx={{ margin: '10px 0px' }} 
      onClick={handleNavigateToSignup}
    >
      Doesn't Have an Account
    </Button> <br />
    <Button 
      variant="text" 
      sx={{ margin: '10px 0px' }} 
      onClick={handleNavigateToforgetpassword}
    >
      Forget Password
    </Button>
    
        </Paper>
    );
}
