import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle forget password (Send OTP)
  const handleForgetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/forgetPassword', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  // Handle reset password (Submit OTP and New Password)
  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/resetPassword', { email, otp, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          Forget Password
        </Typography>

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleForgetPassword} 
          sx={{ marginBottom: 2 }}
        >
          Send OTP
        </Button>

        {/* OTP and New Password Input */}
        {message && <Typography variant="body1" color="error">{message}</Typography>}
        
        <TextField
          label="OTP"
          variant="outlined"
          fullWidth
          margin="normal"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <TextField
          label="New Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="secondary" 
          fullWidth 
          onClick={handleResetPassword} 
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
}

export default ForgetPassword;
