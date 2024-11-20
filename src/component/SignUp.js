import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';


const SignUp = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/signUp', formData); // Replace with your actual backend URL
      setSuccess(response.data.message);
      setFormData({ name: '', email: '', password: '' });
      navigate('/OtpVerification',);
    } catch (err) {
      setError( 'Something went wrong');
      console.log(err)
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap="20px">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
          />
          {error && (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" textAlign="center">
              {success}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
          
        </Box>
      </form>
      <Typography variant="body2" textAlign="center" style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <Link to="/Login" style={{ color: '#1976d2', textDecoration: 'none' }}>
          Login
        </Link>
      </Typography>
    </Paper>
  );
};

export default SignUp;
